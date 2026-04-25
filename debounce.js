const debounce = (fn, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const delay = debounce((i) => console.log("hii " + i), 1000);

delay(1);
delay(2);
delay(3);
