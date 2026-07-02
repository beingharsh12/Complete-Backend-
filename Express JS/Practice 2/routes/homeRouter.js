//External Module
const express = require('express');

//Local Module
const userRouter = express.Router();

//core module
const path = require('path');

//Local Module
const rootDir = require('../utils/path')

userRouter.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = userRouter;
