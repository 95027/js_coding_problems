var findMiddleIndex = function (nums) {
  let left = 0;
  let right = 0;
  let sum = nums.reduce((acc, val) => (acc += val), 0);

  for (let i = 0; i < nums.length; i++) {
    right = sum - left - nums[i];
    if (left === right) return i;
    left += nums[i];
  }

  return -1;
};

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
