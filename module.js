//global module where not require to module like console.log,__dirname
//non globale module where we have to import module before use like http,os ,fs etc
//if we rquire only filewrite than not require to load all fs module
// like 
const fs=require('fs').writeFile; 