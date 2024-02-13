const express = require('express');
const ErrorHandler = require('../errohandler');
const app = express();
const rout=express.Router();

rout.post("/register",(req,resp,next)=>{
    // console.log(req.body);
    if(!req.body.email||!req.body.pass){
        //    resp.status(400).json({Error:"not valid data"})
        //throw new error which handle error handling middleware of express
        // throw new Error("all field require")
       next(ErrorHandler.ValidationError()) //create object of Errorhandler and send error handling midleware
    //register success not send in else than send successs message
    // we can send also resp after next()
    // next()
    }
    else{
        next()
        resp.status(200).json({msg:"register successflly"})

    }
},(req,resp,next)=>{
console.log(req.body.email);
})
module.exports=rout;

///In summary, next() is used to pass control to the next middleware function, whether it's a regular middleware or an error-handling middleware. By providing an argument to next(), you can signal that an error has occurred, prompting Express to skip regular middleware and call error-handling middleware.





