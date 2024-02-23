const AWS=require('aws-sdk')
//using for sdk version 3
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");//not working

require('dotenv').config()

// config user which have permission for ses
// const ses_config={
//     credential:{
//         accessKeyId: process.env.ACCESS_KEY_ID,
//         secretAccessKey:process.env.SECRET_ACCESS_KEY
//     },
//     region:process.env.REGION
// }

const ses_config={
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey:process.env.SECRET_ACCESS_KEY,
      region:process.env.REGION
}

const ses_client=new AWS.SES(ses_config)

//creting aws ses service object
// const ses_client=new SESClient(ses_config)

async function send_mail(){

const params = {
    Source: 'vickyjayswal12@gmail.com',
  Destination: {
    ToAddresses: ['vickyjayswal12@gmail.com','vickyjayswal0@gmail.com'] 
  },
  Message: {
    Body: {
      Text: {
        Charset: 'UTF-8',
        Data: 'Plain text version of your email' 
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Subject of your email' 
    }
  },

};

// try {
//     const send_mailcommand=new SendEmailCommand(params);
//     const res=await ses_client.send(send_mailcommand)
//     console.log("email send success",res);
    
// } catch (error) {
//     console.log("err",error);
// }

try {
  const res=await ses_client.sendEmail(params).promise();
  console.log("succes",res);
} catch (error) {
  console.log("err",error);
}

}

send_mail()
// also work on ses template after that and redo this code 