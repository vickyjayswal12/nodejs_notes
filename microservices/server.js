//user intract using this port using api gateway
const gateway=require("fast-gateway")
const server=gateway(
    {//there are multiple property in gateway 
        routes:[
            {
                prefix:"/product",
                target:"http://localhost:3001/",
                hooks:{

                }
            },
            {
                prefix:"/payment",
                target:"http://localhost:3002/",
                hooks:{
                    
                }
            }
        ]
    }
)
server.get('/',(req,resp)=>{
    resp.send("api gateway server");
})
server.start(3000,()=>{
    console.log("apigateway started 3000 port");
})