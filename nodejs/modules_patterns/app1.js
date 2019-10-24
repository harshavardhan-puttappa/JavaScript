var module1 = require("./module1");

var name = module1.string;

function display(name) {
  console.log(module1.myFunction() + name);
}
display(name);
