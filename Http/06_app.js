var http = require("http");
var fs = require("fs");
//https://itnext.io/how-to-handle-the-post-request-body-in-node-js-without-using-a-framework-cd2038b93190
http
  .createServer(function listener(req, res) {
    if (req.method === "POST") {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString(); // convert Buffer to string
      });
      req.on("end", () => {
        console.log(body);
        res.end("ok");
      });
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(1337, "127.0.0.1");
