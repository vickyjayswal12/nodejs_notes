const fs=require('fs')
const path=require('path')
const express=require('express');
const app=express();
console.log(__dirname)
const dir=path.join(__dirname,'pages')
console.log(dir)
// from this we have not access to send which file we went to send it work from url and also require file extension
app.use(express.static(dir))   //use is use to apply middleware in express
// express.static(dir) this is a middleware for render html pages by default render index page and access another index file / like /about after url localhost:5000
// static mathod is use to render static file


// method to send file according to us also remove extension

// app.get("",(req,resp)=>{
//     resp.sendFile(`${dir}/index.html`);
// })
// app.get("/about",(req,resp)=>{
//     resp.sendFile(`${dir}/about.html`);
// })
// app.get("*",(req,resp)=>{
//     resp.sendFile(`${dir}/not.html`);
// })

app.listen(5000);