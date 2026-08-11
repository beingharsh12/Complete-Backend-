const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken"); //JWT is commonly used to create a token that identifies an authenticated user.
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
      email,
    });
    if (isUserAlreadyExist) {
      return res.status(409).json({
        message: "User already exist..",
      });
    }
    const user = await userModel.create({
      username,
      email,
      password,
    });

    /*
    Jab bhi koi user server ko request bhejta hai, toh server uss user ko identify 
    karne ke liye ek unique token generate karta hai. 
    Ye token user ke identity ko verify karne ke liye use hota hai.
    Or phir server ye token ko user ke browser me cookie ke form me bhejta hai.
    Or ye token phir user ki har request ke sath server ko bheja jata hai, jisse server user ko identify kar sake
    ki vo logged in hai.
    */

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered succesfully..",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { registerUser };
