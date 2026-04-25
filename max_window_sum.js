function test(arr, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(sum, max);
      sum -= arr[i - k + 1];
    }
  }
  return max;
}
console.log(test([2, 1, 5, 1, 3, 2], 3));
