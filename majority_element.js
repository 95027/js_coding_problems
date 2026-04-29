// var majorityElement = function (nums) {
//   const counts = {};
//   for (let n of nums) {
//     counts[n] = (counts[n] || 0) + 1;
//   }
//   let maxCount = 0;
//   let val = null;

//   for (let c in counts) {
//     if (counts[c] > maxCount) {
//       maxCount = counts[c];
//       val = +c;
//     }
//   }

//   return val;
// };

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

var majorityElement = function (nums) {
  let count = 0;
  let num = null;

  for (let n of nums) {
    if (count === 0) {
      num = n;
    }
    count += n === num ? 1 : -1;
  }

  return num;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
