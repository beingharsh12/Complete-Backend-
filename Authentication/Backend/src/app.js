require('dotenv').config();
const express = require('express')
const authRoutes = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const postroutes = require('./routes/post.routes')

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/posts',postroutes)

module.exports = app;