var http = require("http");
var fs = require("fs");

//* Using read and write streams
// var readStream = fs.createReadStream(__dirname + "/read.txt", "utf8");
// var writeStream = fs.createWriteStream(__dirname + "/write.txt");
// readStream.on("data", chunk => {
//   console.log("chunk received");
//   writeStream.write(chunk);
// });

//* Using pipe
// var readStream = fs.createReadStream(__dirname + "/read.txt", "utf8");
// var writeStream = fs.createWriteStream(__dirname + "/write.txt");
// readStream.pipe(writeStream);

var server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    var readStream = fs.createReadStream(__dirname + "/read.txt", "utf8");
    readStream.pipe(res);
  })
  .listen(5000, () => {
    console.log("Server listening at 5000");
  });
