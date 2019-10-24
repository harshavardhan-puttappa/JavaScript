function addNumbers(firstNumber, secondNumber) {
  var result = "The result is:";
  function add() {
    return result + (firstNumber + secondNumber);
  }
  return add;
}
//var resultFun=addNumbers(10,20);
//console.log(resultFun());

var resultFun = addNumbers(10, 20)();
console.log(resultFun);
