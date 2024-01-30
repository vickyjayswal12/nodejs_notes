//this is route level middle ware
//this use when require to apply specific route middleware
//it can apply single route ,and multiple route
//and also we can apply multiple middle ware in single route
//also middleware add some data into req object
//also middleware can send resp to user
const express =require('express');
// const middl=require('./middl')
const app=express();

//apply midleware group  of rout
const rout=express.Router();

const middl=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please eter age")
    }
    else{
        if(req.query.age>=18)
        {
            next(); //this is to acces resp file
        }
        else{
            resp.send("you are under age")
        }
    }
}

rout.use(middl);
app.get('/',(req,resp)=>{
    resp.send("<h1>this is home page <h1>");
})
app.get('/about',middl,(req,resp)=>{
    resp.send("<h1>this is about page <h1>");
})

rout.get('/login',(req,resp)=>{  //by default apply middleware
    resp.send("<h1>this is login page <h1>");
})

app.use('/',rout)

app.listen(5000);