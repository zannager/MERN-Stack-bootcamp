const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("Hello from node");
});

server.listen(8000);
