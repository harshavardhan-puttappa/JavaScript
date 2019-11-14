function revArray(str) {
  //   var strArray = str.split(" ");
  //   var revArray = strArray.reverse();
  //   return revArray.join(" ");
  //   return str.split(" ").reverse().join(" ");

  var strArray = str.split(" ");
  var revString = [];
  var revLength = strArray.length - 1;
  for (let i = revLength; i >= 0; i--) {
    revString.push(strArray[i]);
  }
  return revString.join(" ");
}

console.log(revArray("This is harsha"));
