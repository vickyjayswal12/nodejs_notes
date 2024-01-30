const fs =require('fs');
const res=fs.readFileSync('file0.txt','utf-8')//this syncronise so that output of that store in res variable
console.log(res);
// const a=fs.readFile('file0.txt','utf-8');
// console.log(a);
fs.readFile('file2.txt','utf-8',(err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(res)
    }
})

const res1=fs.writeFileSync()