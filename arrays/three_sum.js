var threeSum = function (nums) {
  let out = [];
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let tripple = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          let key = tripple.join(",");
          if (!seen.has(key)) {
            seen.add(key);
            out.push(tripple);
          }
        }
      }
    }
  }

  return out;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
