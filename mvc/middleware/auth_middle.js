const is_login=async(req,resp,next)=>{
    if(req.query.name=='vicky'&&pasward=='123')
    {
        next();
    }
    else{
        resp.send('login');
    }
}
module.exports=is_login;