var test = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));
  }
};
test(4);
