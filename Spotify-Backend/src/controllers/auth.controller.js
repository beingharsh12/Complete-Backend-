const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res) => {
    const { username, email, password, role = 'user' } = req.body;
    const isuserAlreadyExists = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    });
    if(isuserAlreadyExists){
        return res.status(409).json({ 
                message: 'User already exists'
            });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = new userModel({
        username,
        email,
        password,
        role
    });
    const token = jwt.sign({ 
        id: user._id, 
        role: user.role 
    },process.env.JWT_SECRET);

    res.cookie('token', token)
    res.status(201).json({ 
        message: 'User registered successfully',
        token,
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    });

}

module.exports = {registerUser};