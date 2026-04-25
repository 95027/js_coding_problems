function test(arr) {
  // const out = [];
  // const zeros = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== 0) {
  //     out.push(arr[i]);
  //   } else {
  //     zeros.push(arr[i]);
  //   }
  // }
  // return [...out, ...zeros];

  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
console.log(test([0, 1, 0, 3, 12]));
