// Fibonacci → fib(n - 1) + fib(n - 2)

// var test = function (n) {
//   if (n <= 1) return n;

//   return test(n - 1) + test(n - 2);
// };

// console.log(test(5));

var test = function (n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  // if you need all list
  let list = [0, 1];

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    list.push(c);
    a = b;
    b = c;
  }

  console.log(list);

  return b;
};

console.log(test(5));
