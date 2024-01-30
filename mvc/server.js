//here we use separate file for rout,middleware and controler
//for separets route we use router
const express=require('express');
const app=express();
const auth_router=require('./routes/auth_router')
const product_router=require('./routes/product_router')
const user_router=require('./routes/product_router')

app.get('/',(req,resp)=>{
    resp.send("this is withouth using router page ")
})

app.use('api/auth',auth_router)
app.use('api/product',product_router)
app.use('api/user',user_router)
app.listen(5000);