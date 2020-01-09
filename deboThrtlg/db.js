let counter = 0;

const getData = function() {
  console.log("getting data", counter++);
};

function debouncing(getData, delay) {
  let timer;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
}

const betterGetDataFunction = debouncing(getData, 300);
