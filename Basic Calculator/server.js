const http = require('http')
const {requestHandler} = require('./calculator')
const server = http.createServer(requestHandler)
const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})