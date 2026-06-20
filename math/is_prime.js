// var test = function (n) {
//   if (n <= 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(test(15));

// var test = function (n) {
//   if (n <= 1) return false;

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(test(15));

// divisible by 1 & self only;

var test = function (n) {
  if (n <= 1) return false;

  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(test(15));
