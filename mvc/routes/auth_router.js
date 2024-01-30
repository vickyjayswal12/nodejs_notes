const express=require('express');
// const app=express();
const router=express.Router();
const {home_controler,register_controler}=require('../controller/authcontroler')

router.get('/',home_controler);
router.post('/register',register_controler);

module.exports=router;