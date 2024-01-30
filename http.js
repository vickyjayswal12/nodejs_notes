import http from 'http';
http.createServer((req,resp)=>{
//  resp.write("<h1>hello</h>")
//  resp.end();
if(req=="/")
{
    resp.write("<h1>home page</h>")
    resp.end();
}
else if(req=="/about")
{
    resp.write("<h1>this is about page</h>")
    resp.end();
}
 }   
).listen(3000);
// in this also we have to set header details in api