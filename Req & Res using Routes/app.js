const http = require('http');

const server = http.createServer((req, res) => { 
    console.log(req.url, req.method, req.headers);
    // process.exit(); // to stop the server after one request


   if(req.url == '/purchase'){
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Purchase</title></head>')
    res.write('<body><h1>Hello this is Purchase page</h1></body>');
    res.write('</html>');
    return res.end();
   } 
   else if(req.url=='/'){
      res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Node.js App</title></head>')
    res.write('<body><h1>This is the Home page</h1></body>');
    res.write('</html>');
    return res.end();
    } else if(req.url=='/products'){
      res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>')
    res.write('<body><h1>This is the Products page</h1></body>');
    res.write('</html>');
    return res.end();
    }
    else{
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Error</title></head>')
    res.write('<body><h1>Error 404 page</h1><p>Something went wrong</p></body>');
    res.write('</html>');
     res.end();
    }
    
});
const PORT = 3001;



server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});

