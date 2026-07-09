const express = require('express');
const path = require('path');
const hostRouter = express.Router();
const rootDir = require('../utils/path');


hostRouter.get('/add-home', (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../','views','addHome.html'));
       res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});
    
const homes = [];
hostRouter.post('/add-home', (req,res,next) => {
    homes.push({houseName: req.body.houseName});
    console.log(req.body,req.body.houseName);
    res.sendFile(path.join(rootDir, 'views', 'addedHome.html'));
           
});

exports.hostRouter = hostRouter;
exports.homes = homes;