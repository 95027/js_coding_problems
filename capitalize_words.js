function test(str) {
  return str.split(" ").map((w) => w[0].toUpperCase() + w.slice(1));
}

console.log(test("hello world"));
