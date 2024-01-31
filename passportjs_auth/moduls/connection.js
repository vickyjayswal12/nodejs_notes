const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "pract1"

})
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("database connected")
    }
})

module.exports=connection;