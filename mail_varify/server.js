const express = require('express');
const { verifymail } = require('./verify_mail');
const { verifyVerificationToken } = require('./verifytToken');
const app = express();
app.get('/register',(req,resp)=>{
    verifymail(req.email,"patient");
    resp.status(201).json({
        message: "Registration successful sending email successfull",
        data: req.body,
      });
  
})
app.get("/verify",async (req, res) => {
    const token = req.query.token;
    const tomailer = req.query.email;
    verifyVerificationToken(token, tomailer, req, res);
    
  })
app.listen(5000)