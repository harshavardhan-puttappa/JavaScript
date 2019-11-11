const f1 = function() {
  console.log("f1");
};
const f2 = function() {
  console.log("f2");
};

console.log(f1 == f2);

f1.prototype = function display() {
  console.log("proto function");
};
console.log(f1);
