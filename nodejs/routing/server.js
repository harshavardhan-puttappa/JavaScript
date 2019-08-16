var http = require("http");
var app = require("./app");

http.createServer(app.handleRequest).listen(8000, () => {
  console.log("Server executing at http://127.0.0.1:8000/");
});
