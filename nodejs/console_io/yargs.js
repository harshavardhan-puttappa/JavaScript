const argv = require("yargs").argv;
const name = argv.name;
const command = argv._[0];

var fun1 = name => {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hi");
  }
};

var fun2 = name => {
  if (name) {
    console.log(`Hello ${name} and welcome`);
  } else {
    console.log("Hi and welcome");
  }
};

switch (command) {
  case "fun1":
    fun1(name);
    break;
  case "fun2":
    fun2(name);
    break;
  default:
    console.log("enter some command");
    break;
}
