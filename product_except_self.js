function test(arr) {
  let left = 1;
  let right = 1;

  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    leftArr.push(left);
    left *= arr[i];

    rightArr.unshift(right);
    right *= arr[arr.length - 1 - i];
  }

  let out = leftArr.map((n, i) => n * rightArr[i]);

  return out;
}

console.log(test([-1, 1, 0, -3, 3]));
