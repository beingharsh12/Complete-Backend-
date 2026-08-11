const express  = require('express')
const authController = require('../controllers/auth.cotroller')

const router = express.Router()

// method:POST, Path: /api/auth/register
router.post('/register',authController.registerUser) 
  

// router.get('/test', (req,res)=>{
//     console.log('Cookies:', req.cookies)
//     res.json({
//         message:"test Route",
//         cookies:req.cookies  
//     })
// })

module.exports = router