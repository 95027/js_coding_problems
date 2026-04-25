function test(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  if (str1 === str2) return true;
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  return true;
}

console.log(test("listen", "silen"));
