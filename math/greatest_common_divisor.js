// var test = function (a, b) {
//   for (let i = Math.min(a, b); i >= 1; i--) {
//     if (a % i === 0 && b % i === 0) {
//       return i;
//     }
//   }
// };

// console.log(test(48, 18));

// Euclidean algorithm

var test = function (a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};
console.log(test(48, 18));
