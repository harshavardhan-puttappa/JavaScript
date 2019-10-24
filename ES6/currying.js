//* Currying Example 1
var add = function(a) {
  return function(b) {
    return a + b;
  };
};

var res = add(1)(6);
//var finalSum = res(2);
console.log(res);

//* Currying Example 2
const avg = function(...n) {
  let total = 0;
  for (let index = 0; index < n.length; index++) {
    total += n[index];
  }
  return total / n.length;
};

const currying = function(fn, ...n) {
  return function(...m) {
    return fn.apply(this, n.concat(m));
  };
};

const avgRes = currying(avg, 1, 2, 3);
console.log(avgRes(3, 4));

//* Currying Example 3
const display = function(a) {
  return function(b) {
    return function(c) {
      console.log("Saying " + a + " to " + b + " using " + c);
    };
  };
};

display("hello")("harsha")("javascript");
const res1 = display("hello");
const res2 = res1("harsha");
res2("Javascript");
