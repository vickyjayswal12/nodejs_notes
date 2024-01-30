//multer is use for store  file which was uploaded by client side user
// file can be image pdf video
//learn from piyush garg

const express=require('express');
const app=express()
const multer=require('multer');
// const upload = multer({ dest: 'uploads/' })//this is middleware which store file destinatiom upload folder if folder not have than automatic create
//and also multer curupt the file so we cant see for that we use storage middleware


//use diskstorage to store file  

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //cb ==callback
      return cb(null, './uploads') //if errror null than upoad file dest is 
    },
    filename: function (req, file, cb) {
     
     return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })


app.set('view engine','ejs');

app.use(express.urlencoded({extended:false})) //this is use to parse form data to object



app.get('/',(req,resp)=>{
    // resp.send("home page")
    resp.render('index');
})

// upload.single() is midleware which store file and profileimg is a file name in form data
app.post('/upload',upload.single('profileimg'),(req,resp)=>{
console.log(req.body)  //[Object: null prototype] {} becouse in form there not any text field
console.log(req.file)// file send uoload middleware in body
resp.redirect('/')
})


app.listen(5000);