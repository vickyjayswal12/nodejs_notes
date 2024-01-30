const express=require('express');
const {product_controler}=require('../controller/productcontroler')
const router=express.Router();
router.get('/product',product_controler);
module.exports=router;