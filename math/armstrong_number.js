// Problem: Check if number equals sum of its digits raised to power of digit count
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27

var test = function (n) {
  let arr = n.toString().split("");

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]) ** arr.length;
  }

  return sum === n;
};

console.log(test(153));
