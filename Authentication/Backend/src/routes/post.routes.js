const express = require('express');
const authController = require('../controllers/auth.cotroller');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/create', async (req, res) => {

    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    // Verify token
    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       console.log('Decoded Token:', decoded); // Log the decoded token for debugging
       
       const user = await userModel.findOne({
        _id: decoded.id
       });        
       console.log(user)
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }

    // Token is valid
    res.send('post created successfully');
});

module.exports = router;