const app = require('./app')
const createDB = require('./db/db')

createDB()

app.listen(3000,()=>{
    console.log('Server is running on port 3000..')
} )