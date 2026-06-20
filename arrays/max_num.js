function test(arr) {
  //   return Math.max(...arr);
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(test([5, 1, 9, 3]));
