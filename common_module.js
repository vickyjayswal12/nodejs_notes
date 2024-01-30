fun=()=>{
    console.log("common module")
}

fun1=()=>{
    console.log("common module1")
}
// ony one import
// module.exports={fun}
// default
module.exports=fun; //import any name
// module.exports={fun,fun1}