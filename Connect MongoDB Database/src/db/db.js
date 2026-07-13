const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://harsh:Harshsharma9412@complete-backend.27puc7j.mongodb.net/firstDB')
    console.log('Database connected..')
}

module.exports = connectDB;