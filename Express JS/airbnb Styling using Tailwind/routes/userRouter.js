const express = require('express');

const path = require('path');
const rootDir = require('../utils/path');

const userRouter = express.Router();

userRouter.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'userPage.html'));
});

module.exports = userRouter;