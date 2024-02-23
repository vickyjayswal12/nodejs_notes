const aws=require("aws-sdk");
require('dotenv').config()

//config user which have permission for ses
const ses_config={
    accessKeyId: 'AKIA4MTWJV7XFBM3ORMS',
    secretAccessKey:'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',
    region:'ap-south-1'
}
console.log(process.env.NAME);
console.log(typeof(process.env.NAME));