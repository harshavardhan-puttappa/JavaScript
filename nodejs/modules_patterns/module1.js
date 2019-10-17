function myFunction() {
  return "hello world";
}

var string = "This is Harshavardhan!";

module.exports.myFunction = myFunction;
module.exports.string = string;

// Another method of exportin the module
module.exports = {
  myFunction: myFunction,
  string: string
};

// Another method
module.exports.string = "This is Harshavardhan!";
