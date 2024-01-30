const express = require('express');
const app = express();
const connection=require('./config');

 app.use(express.json())//for convert json to object in
// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: "",
//     database: "pract"

// })
// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("database connected")
//     }
// })
// connection.query('insert into student value(1,"vj")', (err, res) => {
//     console.log(res);
// })


// connection.query("select * from student", (err, res) => {
//     console.log(res);
// })

app.get('/',(req,resp)=>{
    connection.query("select * from student", (err, res) => {
    resp.send(res);
})
})

app.post('/',(req,resp)=>{
  // const data={
  //   st_id:5,
  //   st_name:'vk'
  // }
  const data=req.body;
  connection.query("insert into student set?",data,(err,res,fiels)=>{
    if(err)
    {
      resp.send(err);
    }
    else{
      resp.send(res)
    }

  })
})
app.put('/update/:id',(req,resp)=>{
  const data=[req.body.st_name,req.params.id]
  console.log(req.body);
  connection.query("update student set st_name=? where st_id=?",data,(err,res,fiels)=>{
    if(err)
    {
      resp.send(err);
    }
    else{

      // resp.send(res)
      //in put mathos if data not exist than we enter  that data as new data into table 
      //so that if no any row affected than we add this data into table
      console.log(res.affectedRows)
      let dt={
        st_name:req.body.st_name,
        st_id:req.params.id
      }
      connection.query("insert into student set?",dt,(err,res,fiels)=>{
        if(err)
        {
          resp.send(err);
        }
        else{
          resp.send(res)
        }
    
      })

    }

  })
})

app.listen(5000);
