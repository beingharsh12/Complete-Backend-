console.log('app.js is executing')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')



app.use((req,res,next)=>{
    console.log("First middleware",req.url,req.method)
    next();
})
app.get('/', (req,res,next)=>{
    console.log("handling / request for GET",req.url, req.method)
    res.send(`<h1>Welcome to the Express.js Learnng series...</h1>
        <a href="/contact-us">Contact Us</a>
        `)
})
app.get('/contact-us', (req,res,next)=>{
    console.log("Second middleware",req.url)
    res.send(`
        <h1>Please provide your details</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name='name' placeholder="Enter name"/>
        <input type="email" name='email' placeholder="Enter email"/>
        <input type="submit"/>
        `)
        
    })
    // app.use(bodyParser.urlencoded()); 
    app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.post('/contact-us', (req,res,next)=>{
    console.log("Handling POST request for Contact-us", req.url,req.method,req.body)
    res.send('<h1>We will get back soon...</h1>')

})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`sever is running on  http://localhost:${PORT}`)
})