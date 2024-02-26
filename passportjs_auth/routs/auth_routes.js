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
  
        return done(null, user); //null means there was no error done(error, any data)
      });
    }
  ));
 // it store user's user id in session
  passport.serializeUser((user, done) => {
    console.log("user in serialize",user)
    done(null, user.username); //send into   passport.deserializeUser((username, done) 
  });
  
  // Deserialize username  from session using cookies(done by express sesion library) and get user details from db
  //Deserialize User: When a subsequent request comes in(every request which comes server), Passport will deserialize the user from the session using passport.deserializeUser and make it available in req.user.
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

  rout.get('/logout', function(req, res){
    req.logout(function(err) {
      if (err) {
        console.error("Error during logout:", err);
        return next(err);
      }});
    res.redirect('/');
  });


  rout.get("/get_session",(req,resp)=>{
    console.log(req.user)
    console.log(req.session.userId);
        resp.send(req.session)
  })
module.exports=rout;