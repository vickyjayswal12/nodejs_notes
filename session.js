const express=require('express')
const app=express();
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/',(req,resp)=>{
    req.session.username="vicky";
    req.session.pass="123";
    resp.send("hello")

})
app.get('/get',(req,resp)=>{
    
    resp.send({name: req.session.username,pass: req.session.pass})

})
app.listen(5000)


// when we request first time in this server tan create session map where key was session id of different user and value in object which set key and value like  req.session.username="vicky";
// req.session.pass="123";