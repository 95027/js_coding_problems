function test(arr, k) {
  let out = [];

  let counts = {};

  for (let i = 0; i < k; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }

  function findDuplicates() {
    let curr = [];
    for (let i in counts) {
      if (counts[i] > 1) {
        curr.push(+i);
      }
    }

    return curr;
  }

  out.push(findDuplicates());

  for (let i = 1; i <= arr.length - k; i++) {
    counts[arr[i - 1]]--;

    if (counts[arr[i - 1]] === 0) {
      delete counts[arr[i - 1]];
    }

    counts[arr[i + k - 1]] = (counts[arr[i + k - 1]] || 0) + 1;

    out.push(findDuplicates());
  }

  return out;
}

console.log(test([1, 2, 1, 3, 4, 2, 3], 4));
