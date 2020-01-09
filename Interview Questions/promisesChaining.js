let newPromise = new Promise((resolve, reject) => {
  let n1 = 6,
    n2 = 6;
  if (n1 === n2) {
    resolve("resolved");
  } else {
    reject();
  }
});

newPromise
  .then(data => {
    console.log("promise resolved " + data);
  })
  .catch(() => {
    console.log("promise rejected");
  })
  .catch(() => {
    console.log("rejected again");
  })
  .then(data => {
    console.log("promise resolved again " + data);
  })
  .catch(() => {
    console.log("rejected again");
  })
  .then(data => {
    console.log("promise resolved again " + data);
  });

// function sample(state) {
//   return new Promise((resolve, reject) => {
//     if (state) {
//       resolve("resolved");
//     } else {
//       reject("rejected");
//     }
//   });
// }

// let promise = sample(true);

// promise
//   .then(data => {
//     console.log(data);
//     return sample(false);
//   })
//   .catch(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return sample(true);
//   })
//   .catch(data => {
//     console.log("received" + data);
//   });
