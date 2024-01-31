//all concept learn from coders gyan channel
var a = "vicky"; //datatype define
// let arr:number[]=[1,2,3,"3"]  //if we try string than send error
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));
function add1(a, b) {
    return a + b;
}
console.log(add(2, 5));
function print1(a) {
    // console.log(a);
    // console.log(a.toUpperCase); // throw error becouse of here a can be string or number so that require check
    if (typeof (a) === "string") {
        console.log(a.toUpperCase);
    }
    else {
        console.log(a);
    }
}
print1(2);
//union in function (or)
function first_three(a) {
    return a.slice(0, 3);
}
//any means it can any type
var m;
var arr; //any type of array in array can be any thing
