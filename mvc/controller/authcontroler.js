const home_controler= async (req,resp)=>{
    resp.send("this is register page");
};

const register_controler= async (req,resp)=>{
    resp.send(" registtration done");
};

module.exports={home_controler,register_controler};