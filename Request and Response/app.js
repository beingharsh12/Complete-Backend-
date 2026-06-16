const http = require('http');

const server = http.createServer((req, res) => { 
    console.log(req.url, req.method, req.headers);
    // process.exit(); // to stop the server after one request
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My fist Node.js App</title></head>')
    res.write('<body><h1>Hello from my first Node.js App</h1></body>');
    res.write('</html>');
    res.end();
});
const PORT = 3001;



server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});

