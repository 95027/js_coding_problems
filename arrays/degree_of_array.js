var findShortestSubArray = function (nums) {
  let obj = {};
  for (let key in nums) {
    if (!obj[nums[key]]) {
      obj[nums[key]] = { count: 1, first: key, last: key };
    } else {
      obj[nums[key]] = {
        count: obj[nums[key]].count + 1,
        first: obj[nums[key]].first,
        last: key,
      };
    }
  }

  let maxCount = 0;
  let minLength = Infinity;

  for (let key in obj) {
    let current = obj[key];
    let length = current.last - current.first + 1;
    if (current.count > maxCount) {
      maxCount = current.count;
      minLength = length;
    } else {
      if (current.count === maxCount && minLength > length) {
        minLength = length;
      }
    }
  }

  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
