const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Home Page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Products Page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Mens Section</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body>");
  res.write('<a href="/home">Home</a><br>');
  res.write('<a href="/products">Products</a><br>');
  res.write('<a href="/men">Men</a>');
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
