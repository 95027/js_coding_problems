function test(arr) {
  const set = new Set(arr);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const out = [];
  for (let i = min; i <= max; i++) {
    if (!set.has(i)) out.push(i);
  }
  return out;
}
console.log(test([4, 3, 2, 7, 8, 2, 3, 1]));