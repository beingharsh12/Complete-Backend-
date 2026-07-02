const express = require('express');
const path = require('path');
const hostRouter = express.Router();
const rootDir = require('../utils/path');


hostRouter.get('/add-home', (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../','views','addHome.html'));
       res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});
hostRouter.post('/add-home', (req,res,next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDir, 'views', 'addedHome.html'));
           
});

module.exports = hostRouter;