const  express = require('express');
const homeRouter = express.Router();
const path = require('path');

const rootDir = require('../utils/path')

homeRouter.get('/contact-us', (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'addDetails.html'))
        
    }) 
homeRouter.post('/contact-us', (req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir, 'views', 'contactSuccess.html'))

})

module.exports = homeRouter;