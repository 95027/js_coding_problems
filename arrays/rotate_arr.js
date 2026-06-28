// function test(arr, k) {
//   k = k % arr.length;
//   return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
// }

// console.log(test([1, 2, 3, 4, 5], 2));

// const test = (arr, k) => {
//   k = k % arr.length;
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// console.log(test([1, 2, 3, 4, 5, 6, 7], 30));

var test = function (nums, k) {
  k %= nums.length;

  const reverse = (arr, left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

console.log(test([1, 2, 3, 4, 5, 6, 7], 3));

function test(arr, k) {
  k = k % arr.length;

  // return [...arr.slice(-k), ...arr.slice(0, -k)];

  let out = [];

  for (let i = arr.length - k; i < arr.length; i++) {
    out.push(arr[i]);
  }

  for (let i = 0; i < arr.length - k; i++) {
    out.push(arr[i]);
  }

  return out;
}

console.log(test([1, 2, 3, 4, 5], 3));
