const express=require('express')
const rout=express.Router();
const connection=require('../moduls/connection')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { register_controller,login_controller } = require('../controller/auth_controller');

  passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log(username,password);
      connection.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
        if (err) return done(err);
  
        if (!results.length) {
          return done(null, false, { message: 'Incorrect username.' });
        }
  
        const user = results[0];
  
        if (password !== user.password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
  
        return done(null, user);
      });
    }
  ));
 // it store user'd user id in session
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });
  
  // Deserialize username  from session using cookies(done by express sesion library) and get user details from db
  passport.deserializeUser((username, done) => {
    connection.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
      if (err) return done(err);
  
      const user = results[0];
      done(null, user);
    });
  });

rout.post('/register',register_controller)
rout.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    // res.redirect('/');
    res.send(req.user)
  });


module.exports=rout;