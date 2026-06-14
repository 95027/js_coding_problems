var findKthPositive = function (arr, k) {
  let set = new Set(arr);
  let count = 0;
  let i = 1;

  while (count < k) {
    if (!set.has(i)) {
      count++;
    }
    i++;
  }

  return i - 1;
};

console.log(findKthPositive([1, 2], 5));
