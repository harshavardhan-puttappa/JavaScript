const findPair = (arr, sum) => {
  const pairResult = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      let pair = [];
      if (arr[i] + arr[j] === sum) {
        pair.push(arr[i], arr[j]);
        pairResult.push(pair);
      }
    }
  }
  return pairResult;
};

console.log(findPair([-1, 9, 4, 12, 3, 8], 2));

// Use Cases:
// [-1, 9, 4, 12, 3, 8];
// sum = 2;
