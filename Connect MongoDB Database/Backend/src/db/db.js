const mongoose = require('mongoose');

async function connectDB(){

try{

    await mongoose.connect('mongodb+srv://harsh:Harshsharma9412@backend-development.esotsx8.mongodb.net/firstproject')
    console.log('Database connected..')

}catch(err){
    console.log(err)
}

} 

module.exports = connectDB;