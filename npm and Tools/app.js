const http = require("http");
const fs = require('fs');

server = http.createServer((req, res) => {
  console.log(req.url, req.method);
    if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My fist Node.js App</title></head>");
    res.write("<body><h1>Enter the Details</h1>");
    res.write('<form action="/submitted" method="POST">');
    res.write('<label for="name" >Name: </label>');
    res.write(
      '<input type="text" placeholder="Enter your name" id="name" name="name"/><br><br>',
    );
    res.write('<input type="radio" name="gender" id="male" value="male" />');
    res.write('<label for="male" >Male: </label>');
    res.write(
      '<input type="radio" name="gender" id="female" value="female" />',
    );
    res.write('<label for="female" >Female: </label><br><br>');
    res.write('<input type="submit" />');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if(req.method=='POST' && req.url==='/submitted'){
    const body = [];

    req.on('data',(chunk)=>{
        console.log(chunk);       //data is shown in the form of chunks
        body.push(chunk)
    })
    req.on('end',()=>{
        const fullBody=Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);
        const jsonObject=Object.fromEntries(params)
        console.log(jsonObject);   //data is shown in the form of json format
    })
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end()
  }
});
const PORT = 4001;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
