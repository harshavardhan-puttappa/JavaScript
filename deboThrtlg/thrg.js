let counter = 0;

const getData = () => {
  console.log("Getting data", counter++);
};

const throttling = (getData, delay) => {
  let flag = true;
  return function() {
    if (flag) {
      getData();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
const betterThrgFunction = throttling(getData, 3000);
