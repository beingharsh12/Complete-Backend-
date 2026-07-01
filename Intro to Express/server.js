//Core module
// const http = require('http')

//External module
const express = require('express')

//Local module
const {requestHandler} = require('./app')

const app = express();

app.use('/',(req,res,next)=>{
    console.log("Came in First Middleware", req.url, req.method)
    next();

})
app.use('/submit-details', (req,res,next)=>{
    console.log("Came in Second Middleware", req.url, req.method)
     res.send('<h1>Hey Harsh Sharma how have you been!</h1>')

})

// const server = http.createServer(app)

const PORT = 4001;
app.listen(PORT,()=>{
    console.log(`Server is running at port http://localhost:${PORT}`)
})