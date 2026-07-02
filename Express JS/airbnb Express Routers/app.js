//External module
const express = require('express');
//core module
const path = require('path');
const app = express();


//local modules
const rootDir = require('./utils/path');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

app.use((req,res,next) => {
    console.log(req.url,req.method);
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/host', hostRouter);

app.use((req,res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404Page.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});