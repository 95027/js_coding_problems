// var findMaxAverage = function (nums, k) {
//   let avg = -Infinity;

//   for (let i = 0; i <= nums.length - k; i++) {
//     let sum = nums.slice(i, k + i).reduce((a, v) => (a += v), 0);
//     avg = Math.max(sum / k, avg);
//   }
//   return avg;
// };

// console.log(findMaxAverage([4, 0, 4, 3, 3], 5));

var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((ac, v) => (ac += v), 0);
  let avg = sum / k;

  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum + nums[i + k - 1] - nums[i - 1];
    avg = Math.max(sum / k, avg);
  }
  return avg;
};

console.log(findMaxAverage([4, 0, 4, 3, 3, 7], 5));
