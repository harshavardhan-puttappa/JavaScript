//* Read data from console and print on the console

process.stdin.on("data", data => {
  console.log(data.toString());
});
