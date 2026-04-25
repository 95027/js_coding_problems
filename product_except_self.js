function test(arr) {
  const pro = arr.map((val, i, self) => {
    const arr1 = arr.slice(0, i);
    const arr2 = arr.slice(i + 1);
    const sum = [...arr1, ...arr2].reduce((acc, v) => (acc *= v), 1);
    return sum;
  });

  return pro;
}
console.log(test([1, 2, 3, 4]));