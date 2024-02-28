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
    destination: function (req, file, cb) { //cb ==callback  //here file which use to control file into request and file not comes in express(req,resp) so that we use multer or expressfile lib
      return cb(null, './uploads') //if errror null than upoad file dest is ./uploads
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

// upload.single() is midleware which store file and profileimg(which was used into form file field name) is a file name in form data
app.post('/upload',upload.single('profileimg'),(req,resp)=>{ 
console.log(req.body)  //[Object: null prototype] {} becouse in form there not any text field
console.log(req.file)// file send uoload middleware in body
resp.redirect('/')
})


app.listen(5000);

//when use multer

// when requie to take file from user (like profile image) then user multer and store data into server
//but if file size id big like video than server can crash so that we store file first into serveer than upload file into aws s3 than after file deleted from server 

//code (reference from chat gpt)
// npm install express multer aws-sdk

// const express = require('express');
// const multer = require('multer');
// const aws = require('aws-sdk');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // Configure Multer for file upload
// const upload = multer({ dest: 'uploads/' });

// // Configure AWS SDK
// aws.config.update({
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_AWS_REGION'
// });

// const s3 = new aws.S3();

// // Route to handle file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   const file = req.file;

//   // Read the file from the local filesystem
//   fs.readFile(file.path, (err, data) => {
//     if (err) throw err;

//     // Upload file to S3
//     const params = {
//       Bucket: 'YOUR_BUCKET_NAME',
//       Key: file.originalname,
//       Body: data
//     };

//     s3.upload(params, (s3Err, s3Data) => {
//       if (s3Err) throw s3Err;

//       console.log(`File uploaded successfully. S3 location: ${s3Data.Location}`);

//       // Delete the local file after upload
//       fs.unlink(file.path, (unlinkErr) => {
//         if (unlinkErr) throw unlinkErr;
//         console.log('Local file deleted successfully');
//       });

//       res.send(`File uploaded successfully. S3 location: ${s3Data.Location}`);
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
