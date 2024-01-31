let str="this is school where students where study"
// let reg=/this/;
// let reg=/where/;
let reg=/where/g;   //g for global search and i for insensitive

let res=reg.exec(str)
let res1=reg.exec(str)
console.log(res1);

//for better understand watch code improve reguler expression video