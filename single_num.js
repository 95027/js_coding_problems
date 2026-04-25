var singleNumber = function (nums) {
  let counts = {};

  for (let n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }

  for (let n of nums) {
    if (counts[n] == 1) return n;
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));