var a = 10;
function display() {
  var a = 15;
  console.log(this.a);
}

display();
