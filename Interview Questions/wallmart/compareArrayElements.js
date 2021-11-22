const findElements = (arr1, arr2) => {
  const containsAllElements = arr2.every((ele) => arr1.includes(ele));
  return containsAllElements;
};

console.log(findElements([1, 2, 3], [1, 3, 4]));

// Use Cases:
// [1,2,3] & [1,3] = true
// [1,2,3] & [1,3,4] = false
