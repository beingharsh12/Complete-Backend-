const mongoose = require('mongoose');

async function createDB(){
    console.log(process.env.MONGO_URI)
   await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected..')
}

module.exports = createDB;

