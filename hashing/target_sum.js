function test(arr, tar) {
  // for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //         if (arr[i] + arr[j] === tar) {
  //             return [i, j];
  //         }
  //     }
  // }
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = tar - arr[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[arr[i]] = i;
  }
}
console.log(test([2, 7, 11, 15], 9));
