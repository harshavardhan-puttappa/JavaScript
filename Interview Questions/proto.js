// * String Prototype
let name = "harshavardhan";

String.prototype.appendA = function() {
  let val = "a";
  return this.concat(val);
};

let res = name.appendA();
console.log(res);

// * Map implementation
let array = [1, 2, 3, 4, 5, 6];

function myMap(arr, transform) {
  let squaredArray = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArray.push(transform(arr[i]));
  }
  return squaredArray;
}

function square(ele) {
  return ele * ele;
}
let res = myMap(array, square);
console.log(res);
