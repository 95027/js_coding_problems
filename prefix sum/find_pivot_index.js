var pivotIndex = function (nums) {
  let left = 0;
  let right = nums.slice(1).reduce((acc, val) => (acc += val), 0);

  if (left === right) return 0;

  for (let i = 1; i < nums.length; i++) {
    left = left + nums[i - 1];
    right = right - nums[i];
    if (left === right) return i;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
