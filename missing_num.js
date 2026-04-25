function test(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const actual = arr.reduce((acc, val) => (acc += val), 0);
  return sum - actual;
}
console.log(test([1, 2, 4, 5]));