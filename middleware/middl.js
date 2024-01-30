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
module.exports={middl}