function test(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

console.log(test([1, 2, 3, 4, 5], 2));