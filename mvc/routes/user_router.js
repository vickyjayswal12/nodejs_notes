const express=require('express');
// const app=express();
const {profile_controler}=require('../controller/profile_controler')
const {is_login}=require('../middleware/auth_middle')
const router=express.Router();


router.get('/profile',is_login,profile_controler);
module.exports=router;


