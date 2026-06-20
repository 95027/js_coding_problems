var largestNumber = function (nums) {
  const largest = nums.sort((a, b) => b + "" + a - (a + "" + b)).join("");
  // const lowest = nums.sort((a, b) => a + "" + b - (b + "" + a)).join("");
  return largest[0] === "0" ? "0" : largest;
};

console.log(largestNumber([30, 3, 33, 2]));

var largestString = function (str) {
  const largest = str.sort((a, b) => (b + a).localeCompare(a + b)).join("");
  // const lowest = arr.sort((a, b) => (a + b).localeCompare(b + a)).join("");
  return largest;
};

console.log(largestString(["a", "ab", "aba"]));
