const mongoose = require('mongoose');

async function createDB(){
   await mongoose.connect('mongodb+srv://harsh:Harshsharma9412@complete-backend.27puc7j.mongodb.net/frontendProject')
    console.log('Database connected..')
}

module.exports = createDB;