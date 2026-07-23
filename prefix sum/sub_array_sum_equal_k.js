// only for positive nums

// var test = function (arr, k) {

//     let count = 0;

//     let left = 0;
//     let sum = 0;

//     for (let right = 0; right < arr.length; right++) {
//         sum += arr[right];

//         while (sum > k) {
//             sum -= arr[left];
//             left++;
//         }

//         if (sum === k) count++;
//     }

//     return count;

// };

// console.log(test([1, 2, 1, 1, 1], 3));



var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum === k) {
      count++;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(subarraySum([0, 0], 0));


var test = function (arr, k) {

  let map = new Map();

  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    let need = sum - k;

    if (map.has(need)) {
      count += map.get(need);
    }

    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return count;

};

console.log(test([1, 2, 1, -1], 3));
