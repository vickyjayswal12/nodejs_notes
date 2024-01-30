const express=require('express')
const app=express();
const joi=require('joi');
app.use(express.json())
const validate_middle=(req,resp,next)=>{
    console.log(req.body);
    const schema=joi.object().keys({
        name:joi.string().required(),
        number:joi.number(),      //by default optional
        age:joi.number().min(20).optional(),
        password:joi.string().required(),
        confuirm_pass:joi.string().valid(joi.ref('password')).required(),

         
        items:joi.object().keys({    //nested 
            name:joi.string().required(),
            stock:joi.number()
        })
    }).unknown(true)  //unknown(true) is used for if we send another key from schema by default it is false
    const {error}=schema.validate(req.body,{abortEarly:false})  //{abortEarly:false} send all keys error withouth it i
    // console.log(res);
    if(error)
    {
        resp.status(401).send(error)
    }
    else{
        next()
    }
}
app.post('/',validate_middle,(req,resp)=>{
    resp.send("hello");
})
app.listen(5000);