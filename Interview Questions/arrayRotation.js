function RotateArray(array, rotate) {
  for (let i = 0; i < rotate.length; i++) {
    for (let j = 1; j <= rotate[i]; j++) {
      array.push(array.shift());
      let max = 0;
      for (let k = 0; k < array.length; k++) {
        if (array[k] > max) {
          max = array[k];
        }
      }
      maxIndex.push(array.indexOf(max));
    }
  }
}

let array = [1, 6, 3, 4, 5];
let rotate = [1, 2];
var maxIndex = [];
RotateArray(array, rotate);
console.log(array);
console.log(maxIndex);
