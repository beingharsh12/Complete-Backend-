const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url ,req.method);
  if(req.url==='/calculator'){
     res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Sum</title></head>");
    res.write("<body><h1>Enter the Details</h1>");
    res.write('<form action="/result" method="POST">');
    res.write('<label for="num1" >Num1: </label>');
    res.write(
      '<input type="number" placeholder="Enter first number" id="num1" name="num1"/><br><br>'
    );
    res.write('<label for="num2" >Num2: </label>');
    res.write(
      '<input type="number" placeholder="Enter second number" id="num2" name="num2"/><br><br>'
    );
    
    res.write('<input type="submit" />');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if(req.method==='POST', req.url==='/result'){
    const body = [];
    req.on('data',(chunks)=>{
        console.log(chunks)
        body.push(chunks)
    })
    req.on('end',()=>{
        const fullBody=Buffer.concat(body).toString()
        console.log(fullBody)
        const params = new URLSearchParams(fullBody)
        const jsonObject=Object.fromEntries(params)
        console.log(jsonObject); 
    })
    res.statusCode=302;
    res.setHeader('Location','/')
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Calculator</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome to the page</h1>")
  res.write('<a href="/calculator">Open Calculator</a><br>');
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
