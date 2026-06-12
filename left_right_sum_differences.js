var leftRightDifference = function (nums) {
  let left = 0;
  let right = 0;

  let leftArr = [0];
  let rightArr = [0];

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    leftArr.push(left);
    right += nums[nums.length - 1 - i];
    rightArr.unshift(right);
  }

  return leftArr.map((n, i) => Math.abs(n - rightArr[i]));
};

console.log(leftRightDifference([10, 4, 8, 3]));
