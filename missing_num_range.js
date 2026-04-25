function test(arr) {
  const set = new Set(arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  for (let i = min; i < max; i++) {
    if (!set.has(i)) return i;
  }
}
console.log(test([3, 4, 5, 7]));
