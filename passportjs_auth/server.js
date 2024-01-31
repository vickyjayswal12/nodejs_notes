const express =require('express');
const PORT=5000;
const app=express();
const static=require('./routs/static_routes')
const path=require('path');
const cookieParser=require('cookie-parser');
const auth_rout=require('./routs/auth_routes');
const user_rout=require('./routs/user_routes');
const islogin = require('./middleware/islogin');
const file=path.join(__dirname,'public')
const session = require('express-session')
const passport = require('passport');

//application level midlleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(express.urlencoded({extended:false}))
app.use(express.static(file))
app.use(cookieParser());//for access cookies in req
app.set('view engine','ejs')
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// routes
app.use('/',static);
app.use('/auth',auth_rout);
app.use('/user',islogin,user_rout) //user all rout apply islogin middleware

// app.get('/',(req,resp)=>{
//     resp.render('register')
// })


app.listen(PORT,()=>{
    console.log(`server started in port: ${PORT}`);
})