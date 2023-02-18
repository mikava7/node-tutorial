const http = require("http");
// create web server
//createServer method is looking for callback
//in that callbakc function we have to params, both objects
//we can call them as we want, but common practice is to call them
//req for request(incoming request) and res for response(what we are sending back)
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home");
  }
  if (req.url === "/about") {
    res.end("short history here");
  }

  res.end(` 
  <h1> OOps </h1>
  <a href='/'> back home </a>
  `);
});

//what port are we listening to
server.listen(5000);
