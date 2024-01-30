import express from 'express';
const app=express();
app.get('/',(req,resp)=>{
    resp.send("<h1>this is home page <h1>");
})
app.get('/about',(req,resp)=>{
    resp.send("<h1>this is about page <h1>");
})
app.get('*',(req,resp)=>{
    resp.status(404).send("<h1>404 <h1>");
})


app.listen(3000);