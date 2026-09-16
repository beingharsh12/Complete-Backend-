require("dotenv").config({
    path: "../.env"
});
const app  = require('./app');
const connectDB = require('./db/db');

// Connect to MongoDB
connectDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});