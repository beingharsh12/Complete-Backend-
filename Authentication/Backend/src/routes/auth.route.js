const express  =require('express')
const authController = require('../controllers/auth.cotroller')

const router = express.Router()

// method:POST, Path: /api/auth/register
router.post('/register',authController.registerUser)

module.exports = router