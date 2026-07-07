const express = require('express');

const path = require('path');
const homes = require('./hostRouter').homes;

const userRouter = express.Router();

userRouter.get('/', (req,res,next) => {
    res.render('userPage', { homes });
});

module.exports = userRouter;