// import fs from 'fs';
const fs=require('fs')
const path=require('path')
console.log(__dirname)
const dir=path.join(__dirname,'files')
console.log(dir)
for(let i=0;i<5;i++)
{
    fs.writeFileSync(`${dir}/file${i}.txt`,`this is file${i}`)
}
// for read file
fs.readdir(dir,(err,file)=>{
    console.log(file)
    file.forEach((val)=>{
        console.log(val)
        // fs.readFileSync(val,(err,text)=>{
        //     console.log(text)
        // })
    })
})

// const a=
fs.readFile(`${dir}/file0.text`,'utf8',(err,text)=>{
        console.log(text)
 })