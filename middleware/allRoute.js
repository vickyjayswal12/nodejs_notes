//this is application level middle ware

const express =require('express');
const app=express();
const middleware=(req,resp,next)=>{
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
app.use(middleware); //apply to all route for checking user
app.get('/',(req,resp)=>{
    resp.send("<h1>this is home page <h1>");
})
app.get('/about',(req,resp)=>{
    resp.send("<h1>this is about page <h1>");
})

app.listen(5000);