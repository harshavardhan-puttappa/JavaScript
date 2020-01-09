// // * JavaScript Interview questions

// //* What is the output of the program
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log("i:" + i); //? Prints i:5 five times
//   }, i * 1000);
// }

// // Output?
// console.log(123);
// setTimeout(() => {
//   console.log("Time delay of 2 seconds");
// }, 2000);
// console.log("testing");

// //* Output?
// console.log(null === undefined);

// for (const i = 0; i < 5; i++) {
//   console.log(i);
// }

// const a = {
//   name: "harsha"
// };

// a.var = "aarush";
// console.log(a);
// a = "";

// function add(...n) {
//   return n.reduce((a, b) => {
//     return a + b;
//   });
// }

// console.log(add(1, 2, 3));

// console.log([1, 2, 3, 4, 5].map(e => e > 3));

// const arr = [1, 2, 3];

// console.log(arr.findIndex(e => e == 2));
// console.log(arr.indexOf(2));

// const user = {
//   name: "virat kohli",
//   age: 33
// };

// function display(name, age) {
//   return "Name:" + name + ", age=" + age;
// }

// const funcall1 = display.call(user.name, user.age); // displays: {Name: 33,age: undefined}
// const funcall2 = display("virat kohli", 33); // displays: {Name: virat kohli,age: 33}

// console.log("Funcall1:" + funcall1);
// console.log("Funcall2:" + funcall2);

// //* xyz.js
// setTimeout(() => {
//   module.exports = { a: "harsha" };
// }, 0);

// //* abc.js
// var xyz = require("./xyz");
// console.log(xyz);
