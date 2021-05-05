const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello to Home page");
  }
  if (req.url === "/about") {
    res.end("Hello to about page");
  }
  res.end(`
    <h1>Error</h1>
    <a href = "/">Home page</a>
  `);
});

server.listen(5000);
