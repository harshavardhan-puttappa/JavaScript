// First Example:
// let cleanRoom= new Promise(function (resolve,reject){
//     let done=false;
//     if(done){
//         resolve('cleaning done');
//     }else{
//         reject('cleaning not done');
//     }
// });

// cleanRoom.then(function(fromResolve){
//     console.log('result is='+fromResolve);
// }).catch(function(fromReject){
//     console.log('Reject result is='+ fromReject);
// });

// Second Example
var promise = new Promise(function(resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function() {
    console.log("Success, You are a GEEK");
  })
  .catch(function() {
    console.log("Some error has occured");
  });

// Third Example

let fun1 = function() {
  return new Promise(function(resolve, reject) {
    resolve("first done ");
  });
};

let fun2 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + "second done ");
  });
};

let fun3 = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + "third done ");
  });
};

fun1()
  .then(function(result) {
    return fun2(result);
  })
  .then(function(result) {
    return fun3(result);
  })
  .then(function(result) {
    console.log("work done: " + result);
  });

// To check all promises are executed
Promise.all([fun1(), fun2(), fun3()]).then(function() {
  console.log("all done");
});

//to check any one of them is executed
Promise.race([fun1(), fun2(), fun3()]).then(function() {
  console.log("one of them is done");
});

var newpromise = new Promise(function(resolve, reject) {
  var x = 5;
  var y = 10;
  if (x === y) {
    resolve("success");
  } else {
    reject("fail");
  }
});

newpromise
  .then(function(res) {
    console.log(res + ": promise reloved");
  })
  .catch(function(rej) {
    console.log(rej + ":promise rejected");
  });
