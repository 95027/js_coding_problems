// function test(arr) {
//   //   return [...new Set(arr)];
//   const seen = new Set();
//   const out = [];
//   for (let num of arr) {
//     if (!seen.has(num)) {
//       seen.add(num);
//       out.push(num);
//     }
//   }
//   return out;
// }
// console.log(test([1, 2, 2, 3, 4, 4]));

const test = (arr) => {
  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
};

console.log(test([1, 1, 2, 2, 3, 4, 4, 5]));
