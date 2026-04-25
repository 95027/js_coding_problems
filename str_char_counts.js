function test(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] || 0) + 1;
  }
  return counts;
}
console.log(test("aabbbcc"));
