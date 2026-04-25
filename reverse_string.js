function test(str) {
  //   return str.split("").reverse().join("");
  let out = "";
  for (let i = str.length - 1; i > 0; i--) {
    out += str[i];
  }
  return out;
}
console.log(test("hello"));
