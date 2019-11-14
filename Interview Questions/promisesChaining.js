let newPromise = new Promise((resolve, reject) => {
  let n1 = 5,
    n2 = 6;
  if (n1 !== n2) {
    resolve();
  } else {
    reject();
  }
});

newPromise
  .then(() => {
    console.log("promise resolved");
  })
  .catch(() => {
    console.log("promise rejected");
  })
  .catch(() => {
    console.log("rejected again");
  })
  .then(() => {
    console.log("promise resolved again");
  });
