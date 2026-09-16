// const dns = require('dns');

// dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config({ path: '../.env' });
const app = require('./app')
const connectDB = require('./db/db')

console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB()

app.listen(3000,()=>{
    console.log('server is running on port 3000..')
})