// var test = function (arr, tar) {
//   let out = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === tar) {
//         out.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return out;
// };

// console.log(test([1, 2, 3, 4, 5], 6));

var test = function (arr, tar) {
  let out = [];
  let map = {};

  for (let n of arr) {
    let diff = tar - n;

    if (map[diff] !== undefined) {
      out.push([diff, n]);
    }

    map[n] = true;
  }

  return out;
};

console.log(test([1, 2, 3, 4, 5], 6));
