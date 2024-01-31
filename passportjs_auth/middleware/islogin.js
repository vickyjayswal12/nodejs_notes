
const islogin=async(req,resp,next)=>{
   
  if(req.user)
  {
    next()
  }
  else{
    resp.redirect('/')
  }
}

    
    
    
module.exports=islogin;