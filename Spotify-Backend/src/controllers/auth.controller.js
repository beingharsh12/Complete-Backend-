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
        password:hashedPassword,
        role
    });

    await user.save();
    
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

const loginUser = async (req, res) => {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({
        $or:[
            { username },
            { email }        // koi  ek sahi hoga or dusra Undefined rhega
        ]
    });
    if(!user){
        return res.status(404).json({
            message: 'Invalid credentials'
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET);

    res.cookie('token', token)


    res.status(200).json({
        message: 'User logged in successfully',
        token,
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    });

};

module.exports = { registerUser, loginUser };