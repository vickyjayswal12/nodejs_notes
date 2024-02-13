const express = require('express');
const app = express();
const auth = require('./routs/auth');
const ErrorHandler = require('./errohandler');
app.use(express.json())
app.use("/auth",auth)
app.get("*",(req,resp,next)=>{
  
    next(ErrorHandler.NotFoundError())

})

//error handling middleware
app.use((err,req,resp,next)=>{
// resp.status(400).json({
//     msg:err.message
// })
console.log(err);
if(err instanceof ErrorHandler){ //if comming error is object of errorhandler
resp.status(err.status).json({
    message:err.message
})}
//generic error
else{
resp.status(500).json(
    {
        message:err.message
    }
)
}
})
app.listen(5000)