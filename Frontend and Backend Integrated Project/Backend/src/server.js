// const dns = require('dns');

// dns.setServers(['8.8.8.8', '8.8.4.4']);
require('dotenv').config({ path: '../.env' });
const app = require('./app')
const createDB = require('./db/db')

createDB()

app.listen(3000,()=>{
    console.log('Server is running on port 3000..')
} ) 