var a = 10;
var obj = {
  a: 20,
  getA() {
    console.log(this.a);
    foo();
  }
};
function foo() {
  console.log(this.a);
}
//var x = obj.getA;
//console.log(x()); // Prints undefined
obj.getA(); // prints 20 & undefined

x = 10;
function test() {
  console.log(this.x); // both statements refers to global value x
  console.log(x);
}

test();

function a() {
  var a = 20;
  if (true) {
    var a = 30;
    console.log(a);
  }
  console.log(a);
}
a();
