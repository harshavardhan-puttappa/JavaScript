var fs = require("fs");

// * delete a file asynchronously
fs.unlink("./text/sample.txt", err => {
  if (err) {
    console.error(err);
  }
});
