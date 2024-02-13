const express = require('express');
const app = express();
app.get('/',(req,resp)=>{
  resp.send("payments")
}
)
app.get('/payments',(req,resp)=>{
    resp.send({
        payments:
        [
            {id:1 ,name:"payment1"},
            {id:2 ,name:"payment2"},
            {id:3 ,name:"payment3"}
        ]}
    )
}
)
app.listen(3002)