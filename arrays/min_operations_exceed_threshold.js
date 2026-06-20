// var minOperations = function (nums, k) {
//   nums = nums.sort((a, b) => a - b);

//   if (nums[0] >= k) return 0;

//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < k) {
//       nums.shift();
//       count++;
//       i--;
//     }
//   }

//   return count;
// };

// console.log(minOperations([1, 1, 2, 4, 9], 9));

var minOperations = function (nums, k) {
  let count = 0;

  for (let num of nums) {
    if (num < k) {
      count++;
    }
  }

  return count;
};

console.log(minOperations([1, 1, 2, 4, 9], 9));
