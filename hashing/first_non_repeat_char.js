function test(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    if (!counts[str[i]]) {
      counts[str[i]] = 1;
    } else {
      counts[str[i]] += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]] === 1) {
      return str[i];
    }
  }
  return "";
}

console.log(test("aabbcddee"));
