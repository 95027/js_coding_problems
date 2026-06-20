// Factorial → n * factorial(n - 1)

var test = function (n) {
  if (n <= 1) return 1;

  return n * test(n - 1);
};

console.log(test(5));
