function test(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(test([3, 1], [2, 4]));