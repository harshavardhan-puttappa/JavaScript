var str = "Hi this is harshavardhan";

function findVowels(str) {
  let noOfVowels = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      noOfVowels++;
    }
  }
  return noOfVowels;
}

var res = findVowels(str);
if (res > 0) {
  console.log("Number of vowels in the string is:" + res);
} else {
  console.log("No vowels in the string");
}
