var waysToSplitArray = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  let total = nums.reduce((acc, val) => (acc += val), 0);
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum = total - leftSum;
    if (leftSum >= rightSum) count++;
  }

  return count;
};

console.log(waysToSplitArray([10, 4, -8, 7]));
