var fs = require("fs");

//*create a directory asynchronously
fs.mkdir("stuff", err => {
  if (err) {
    console.error(err);
  }
});

//*remove a directory asynchronously
fs.unlink("stuff/t.txt", () => {
  fs.rmdir("stuff", err => {
    if (err) {
      console.error(err);
    }
  });
});
