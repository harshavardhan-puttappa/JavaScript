function sayHello(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function callback() {
  console.log("This is callback function");
}
sayHello("Harsha", callback);

var arr = [1, 2, 3, 4, "harsha"];

arr.forEach(element => {
  console.log(element);
});
