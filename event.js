//let take example we count how many times api called
//by using eventemmiter module
const express =require('express');
const Eventemmiter=require('events')  //tthis is a class so that first cha is capital
const event = new Eventemmiter(); //object
const app=express();
let count=0;

// event handle
event.on("cout_api_all",()=>{
    count++;
    console.log("no. of times api called",count)
})

app.get("",(req,resp)=>{
    resp.send("this is home")
    event.emit("cout_api_all");//event fire
})

app.get("/about",(req,resp)=>{
    resp.send("this is about")
    event.emit("cout_api_all");//event fire
})
app.get("/login",(req,resp)=>{
    resp.send("this is login")
    event.emit("cout_api_all");//event fire
})

app.listen(5000);
