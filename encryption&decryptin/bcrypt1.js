const express=require('express');
const app=express()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "pract"

})
app.post('/register',(req,resp)=>{
    

})