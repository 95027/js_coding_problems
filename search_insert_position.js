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

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }

//   return nums.length;
// };

// console.log(searchInsert([1, 3, 5, 6], 8));

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 8));
