// var searchInsert = function (nums, target) {
//   const index = nums.findIndex((n) => n === target);

//   if (index !== -1) {
//     return index;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > target) {
//       return i;
//     }
//   }

//   return nums.length;
// };

// console.log(searchInsert([1, 3, 5, 6], 5));

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 8));
