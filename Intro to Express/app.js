
const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  // process.exit(); // to stop the server after one request
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My fist Node.js App</title></head>");
    res.write("<body><h1>Enter the Details</h1>");
    res.write('<form action="/submit-details" method="POST">');
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
  } else if ((req.method = "POST" && req.url.toLowerCase() === "/submit-details")) {
    const body = [];

    req.on("data", (chunk) => {
      // Chunks :- The small unit of data that is comes from the server
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      //It means Chunk aane band ho gye
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);      
    //   fs.writeFileSync("form-details.txt", JSON.stringify(jsonObject));
    });

    res.statusCode = 302;  
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My fist Node.js App</title></head>");
  res.write("<body><h1>Hello from my first Node.js App</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {requestHandler}