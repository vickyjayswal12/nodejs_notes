//template engine is for send dynamic html page from server to client 
//add some data to html and send to client
//there multiple template engine like ejs 
const path=require('path')
const express=require('express');
const { profile } = require('console');
const app=express();
console.log(__dirname)
const dir=path.join(__dirname,'pages')
console.log(dir)
app.set('view engine','ejs')  //view engine is one type of template engine and ejs is package
///every template engine require views folder
app.get("",(req,resp)=>{
    resp.sendFile(`${dir}/index.html`);
})
app.get("/about",(req,resp)=>{
    resp.sendFile(`${dir}/about.html`);
})

app.get("/profile",(req,resp)=>{
     //let fetch data from database
     let user={
        name:"rahul",
        email:"abc@gmail.com",
        skills:['c++','js','java','python']
    }
    // resp.render('profile');
    resp.render('profile',{user});
})

app.get("*",(req,resp)=>{
   
    resp.sendFile(`${dir}/not.html`);

})

app.listen(5000);



// imp note:---

// if you have to apply extrnal  css in  any html file which than you have to require to use express.static(css file path) than app
// inline and intenal css not require to use any middleware
