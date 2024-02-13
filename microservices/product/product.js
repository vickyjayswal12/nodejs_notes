const express = require('express');
const app = express();
app.get('/',(req,resp)=>{
  resp.send("product")
}
)
app.get('/products',(req,resp)=>{
    resp.send({
        products:
        [
            {id:1 ,name:"product1"},
            {id:2 ,name:"product2"},
            {id:3 ,name:"product3"}
        ]}
    )
}
)
app.listen(3001)