var arr = [4, 10, 12, 15, 15, 20];

findDuplicateElementDivisibleBy5(arr);

function findDuplicateElementDivisibleBy5(arr) {
  var dupEle = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (arr[i] % 5 === 0) {
          dupEle = arr[i];
        }
      }
    }
  }
  if (dupEle !== 0) {
    console.log("Duplicate element is:" + dupEle);
  } else {
    console.log("No duplicate element divisible by found");
  }
}
