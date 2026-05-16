// var findLHS = function (nums) {
//   let out = [];

//   nums = nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     let temp = [nums[i]];
//     let diff = false;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] - nums[i] === 1 || nums[i] === nums[j]) {
//         temp.push(nums[j]);
//         if (nums[j] - nums[i] === 1) {
//           diff = true;
//         }
//       }
//     }
//     if (diff) {
//       out.push(temp);
//     }
//   }

//   let len = 0;

//   out.forEach((a) => {
//     len = Math.max(len, a.length);
//   });

//   return len;
// };

// console.log(findLHS([1, 1]));

var findLHS = function (nums) {
  let counts = {};

  for (let n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }

  let max = 0;

  for (let k in counts) {
    let key = Number(k);
    if (counts[key + 1]) {
      max = Math.max(max, counts[key] + counts[key + 1]);
    }
  }

  return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
