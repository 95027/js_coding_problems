function test(arr) {
  //   return [...new Set(arr)];
  const seen = {};
  const out = [];
  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      out.push(num);
    }
  }
  return out;
}
console.log(test([1, 2, 2, 3, 4, 4]));
