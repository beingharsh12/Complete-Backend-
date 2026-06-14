// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
// });

// server.listen(3000);


//Methdod 2
const http = require('http');

const server = http.createServer((req, res) => { 
    console.log(req);
});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})