var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }
    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
