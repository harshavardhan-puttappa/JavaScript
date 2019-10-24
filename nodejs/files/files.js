var fs = require("fs");

// * Read filename and new content from command arguments

// var filename = process.argv[2];
// var newContent = process.argv[3];

// fs.readFile(filename, (err, data) => {
//   console.log(data.toString());
// });

// fs.writeFile(filename, newContent, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("success");
//   }
// });

// * Asynchronous or non-blocking method of using fs
fs.readFile("./text/tfile1.txt", (err, data) => {
  fs.readFile("./text/tfile2.txt", (err, data1) => {
    fs.writeFile("./text/tfile3.txt", data + " " + data1, err => {
      console.log("success");
    });
  });
});

//* Synchronous or blocking method of using fs
var data1 = fs.readFileSync("./text/tfile1.txt");
var data2 = fs.readFileSync("./text/tfile2.txt");
fs.writeFileSync("./text/tfile3.txt", data1 + " " + data2);
