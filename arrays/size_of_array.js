function test(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr.slice(i, i + size);
    out.push(item);
    i += size - 1;
  }
  return out;
}

console.log(test([1, 2, 3, 4, 5], 2));