function test(arr, k) {
  let out = [];

  function checkCount(start) {
    let count = 0;

    for (let i = start + 1; i < start + k - 1; i++) {
      if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
        count++;
      }
    }

    return count;
  }

  out.push(checkCount(0));

  for (let i = 1; i <= arr.length - k; i++) {
    out.push(checkCount(i));
  }

  return out;
}

console.log(test([1, 2, 1, 3, 4, 2, 3], 4));
