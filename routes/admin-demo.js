const path = require('path');
const express = require('express');
const rootDir = require('../util/path-demo')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    res.redirect('/');
});

exports.routes = router;