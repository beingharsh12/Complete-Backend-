 const userModel = require('../models/user.model')
 const jwt = require('jsonwebtoken')
 
 const registerUser = async (req, res)=>{
    const {username, email, password} = req.body;
    const user = await userModel.create({
        username, email, password
    })  

    const isUserAlreadyExist = await userModel.findOne(
        {
            email
        }
    )
    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"User already exist.."
        })
    }

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"User registered succesfully..",
        user
    })
}

module.exports = {registerUser}