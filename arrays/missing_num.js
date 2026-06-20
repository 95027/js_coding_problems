// function test(arr) {
//   const n = arr.length + 1;
//   const sum = (n * (n + 1)) / 2;
//   const actual = arr.reduce((acc, val) => (acc += val), 0);
//   return sum - actual;
// }
// console.log(test([1, 2, 4, 5]));

// function test(arr) {
//   const set = new Set(arr);
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   for (let i = min; i < max; i++) {
//     if (!set.has(i)) return i;
//   }
// }
// console.log(test([3, 4, 5, 7]));

// function test(arr) {
//   const set = new Set(arr);
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const out = [];
//   for (let i = min; i <= max; i++) {
//     if (!set.has(i)) out.push(i);
//   }
//   return out;
// }
// console.log(test([4, 3, 2, 7, 8, 2, 3, 1]));

var firstMissingPositive = function (nums) {
  let set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

console.log(firstMissingPositive([3, 4, 2, 1]));
