const test = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (second < arr[i] && first !== arr[i]) {
      second = arr[i];
      if (first < arr[i]) {
        second = first;
        first = arr[i];
      }
    }
  }
  return second === -Infinity ? null : second;
};

console.log(test([3, 3]));
