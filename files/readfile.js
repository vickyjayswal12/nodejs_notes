const fs =require('fs');
const res=fs.readFileSync('file0.txt','utf-8')//this syncronise so that output of that store in res variable and stop haere program until file reading not completed
console.log(res);
// const a=fs.readFile('file0.txt','utf-8');
// console.log(a);

//it will work in asynchronase manner progam not wait here to complete file reading after reading file callback function run
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