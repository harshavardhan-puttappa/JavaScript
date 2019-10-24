function testvar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log("in var scope");
    console.log(a);
  }
  console.log(a);
}
testvar();

function testlet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log("in let scope");
    console.log(a);
  }
  console.log(a);
}

testlet();

for (var index = 0; index < 10; index++) {
  console.log(index);
}

console.log(index);

const colors = ["red", "green"];
colors.push("blue");

colors = "yellow"; //throws an error
console.log(colors);
