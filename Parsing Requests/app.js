const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
    console.log(req.url, req.method);
    // process.exit(); // to stop the server after one request
    if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My fist Node.js App</title></head>')
    res.write('<body><h1>Enter the Details</h1>');
    res.write('<form action="/submit-details" method="POST">')
    res.write('<label for="name" >Name: </label>')
    res.write('<input type="text" placeholder="Enter your name" id="name" name="name"/>')
    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
    } 
    else if(req.method = 'POST' && req.url.toLowerCase()==='/submit-details'){
        const body = [];
        req.on('data', (chunk)=>{  // Chunks :- The small unit of data that is comes from the server
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', ()=>{  //It means Chunk aane band ho gye
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody)
        })
        fs.writeFileSync('user-details.txt','Harsh Sharma');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My fist Node.js App</title></head>')
    res.write('<body><h1>Hello from my first Node.js App</h1></body>');
    res.write('</html>');
    res.end();
});
const PORT = 3000;



server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});

