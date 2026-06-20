// var isPowerOfTwo = function (n) {
//   if (n <= 0) return false;
//   return (n & (n - 1)) === 0;
// };

// console.log(isPowerOfTwo(-16));

// var isPowerOfThree = function (n) {
//   if (n <= 0) return false;
//   while (n % 3 === 0) {
//     n = n / 3;
//   }
//   return n === 1;
// };

// console.log(isPowerOfThree(9));

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;
//   while (n % 4 === 0) {
//     n = n / 4;
//   }
//   return n === 1;
// };

// console.log(isPowerOfFour(15));

var isPowerOf = function (n, base) {
  if (n <= 0) return false;
  while (n % base === 0) {
    n = n / base;
  }
  return n === 1;
};

console.log(isPowerOf(16, 4));
console.log(isPowerOf(16, 2));
console.log(isPowerOf(9, 3));
