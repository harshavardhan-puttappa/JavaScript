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

// const f1 = function() {
//   console.log("f1");
// };
// const f2 = function() {
//   console.log("f2");
// };

// console.log(f1 == f2);

// function add(...n) {
//   return n.reduce((a, b) => {
//     return a + b;
//   });
// }

// console.log(add(1, 2, 3));

// console.log([1, 2, 3, 4, 5].map(e => e > 3));

const arr = [1, 2, 3];

console.log(arr.findIndex(e => e == 2));
console.log(arr.indexOf(2));
