const http = require('http')
const {requestHandler} = require('./app')
const server = http.createServer(requestHandler)

const PORT = 4003;
server.listen(PORT,()=>{
    console.log(`Server is running at port http://localhost:${PORT}`)
})

