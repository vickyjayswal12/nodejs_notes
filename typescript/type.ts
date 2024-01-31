//all concept learn from coders gyan channel
//if tsc command not work than use tsc.cmd like tsc.cmd type.ts
let a:string="vicky"  //datatype define
// let arr:number[]=[1,2,3,"3"]  //if we try string than send error


function add (a:number,b:number){
   return a+b;
}
console.log(add(2,5));


function add1 (a:number,b:number):number{ //this funtion return number
    return a+b;
 }
 console.log(add(2,5));


 //union
 type f=number|string

 function print1(a:f){
    // console.log(a);
    // console.log(a.toUpperCase); // throw error becouse of here a can be string or number so that require check
    if(typeof(a)==="string")
    {
        console.log(a.toUpperCase)
    }
    else{
        console.log(a)
    }
 }

 print1(2)

 //union in function (or)
 function first_three(a:string|number[]) {
    return a.slice(0,3);
    
 }

 //any means it can any type
 let m:any;
 let arr:any[];//any type of array in array can be any thing