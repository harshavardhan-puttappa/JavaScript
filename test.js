// var marray = [[1, 2, 3], [4, 5, 6]];
// var sum = [];

// for (i = 0; i < 1; i++) {
//   for (j = 0; j < 3; j++) {
//     let res = marray[i][j] + marray[i + 1][j];
//     sum.push(res);
//   }
// }

// console.log(sum);

function revArray(str) {
  //   var strArray = str.split(" ");
  //   var revArray = strArray.reverse();
  //   return revArray.join(" ");
  //   return str.split(" ").reverse().join(" ");

  var strArray = str.split(" ");
  var revString = [];
  var revLength = strArray.length;
  for (let i = revLength - 1; i >= 0; i--) {
    revString.push(strArray[i]);
  }
  return revString.join(" ");
}

console.log(revArray("This is harsha"));
