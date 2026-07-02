const express = require('express')
const app = express();

const userRouter = require('./routes/contactRouter')
const homeRouter = require('./routes/homeRouter')
const path = require('path')



app.use((req,res,next)=>{
    console.log("First middleware",req.url,req.method)
    next();
})


app.use(express.urlencoded())

app.use(userRouter);
app.use(homeRouter);

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});


const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})