var marray = [
  [1, 2, 3],
  [4, 5, 6]
];
var sum = [];

for (i = 0; i < 1; i++) {
  for (j = 0; j < 3; j++) {
    let res = marray[i][j] + marray[i + 1][j];
    sum.push(res);
  }
}

console.log(sum);
