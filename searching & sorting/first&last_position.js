// var test = function (nums, target) {
//   let first = -1;
//   let last = -1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       if (first === -1) first = i;
//       last = i;
//     }
//   }

//   return [first, last];
// };

// console.log(test([1, 2, 3, 3, 3, 4, 5], 3));

var test = function (nums, target) {
  const first = () => {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        ans = mid;
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  };

  const last = () => {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        ans = mid;
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return ans;
  };

  return [first(), last()];
};

console.log(test([1, 2, 3, 3, 3, 4, 5], 3));
