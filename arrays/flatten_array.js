function test(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    checkArr(arr[i]);
  }

  function checkArr(val) {
    if (Array.isArray(val)) {
      val.forEach((v) => checkArr(v));
    } else {
      out.push(val);
    }
  }
  return out;
}

console.log(test([1, [2, [0], 3], [4]]));
