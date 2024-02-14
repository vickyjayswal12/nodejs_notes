
const path=require('path')
const express=require('express');
const app=express();
console.log(__dirname)
const dir=path.join(__dirname,'pages')
console.log(dir)
app.set('view engine','pug') 
console.log(app.get("views")); 
app.get("/",(req,resp)=>{
    // resp.sendFile(`${dir}/index.html`);
    resp.render('index', { title: 'Express with Pug' });


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
    resp.render('profile',{ title: 'profile',user:user });
})

app.get("*",(req,resp)=>{
   
    resp.sendFile(`${dir}/not.html`);

})

app.listen(5000);



