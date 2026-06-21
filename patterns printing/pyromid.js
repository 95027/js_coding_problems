// var test = function (n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//   }
// };
// test(4);

var test = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));
  }
};
test(4);
