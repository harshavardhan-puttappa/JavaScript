var foo = {
  name: "harsha",
  age: 33,
  address: {
    city: "Bengaluru",
    state: "karnataka",
    country: "India"
  }
};

//* Shallow copy using spread and Object.assign
// var bar = { ...foo };
// console.log(bar);

// Object.assign
// var test = Object.assign({}, foo);
// test.name = "rachith";
// foo.address.city = "harshavardhan";
// console.log(JSON.stringify(test));

//* Deep copy using JSON.stringify and JSON.parse

// let deepClone = JSON.parse(JSON.stringify(foo));
// foo.name = "Harshvardhan";
// foo.address.city = "shivamogga";
// console.log(JSON.stringify(foo));
// console.log(JSON.stringify(deepClone));

// deepClone.name = "rachith";
// deepClone.age = 2;
// deepClone.address.city = "moodabidri";
// console.log(JSON.stringify(foo));
// console.log(JSON.stringify(deepClone));

//* Using Naive method
function copy(mainObj) {
  let objCopy = {}; // objCopy will store a copy of the mainObj
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // copies each property to the objCopy object
  }
  return objCopy;
}

const mainObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};
console.log(copy(mainObj));

//* Copying Object Methods
let obj = {
  name: "scotch.io",
  exec: function exec() {
    return true;
  }
};

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1);
console.log(method2);
