// function test(arr) {
//   let left = 1;
//   let right = 1;

//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     leftArr.push(left);
//     left *= arr[i];

//     rightArr.unshift(right);
//     right *= arr[arr.length - 1 - i];
//   }

//   let out = leftArr.map((n, i) => n * rightArr[i]);

//   return out;
// }

// console.log(test([-1, 1, 0, -3, 3]));

// var test = function (arr) {
//   let leftPro = [];
//   let rightPro = [];

//   leftPro[0] = 1;
//   rightPro[arr.length - 1] = 1;

//   for (let i = 1; i < arr.length; i++) {
//     leftPro[i] = leftPro[i - 1] * arr[i - 1];
//     let j = arr.length - 1 - i;
//     rightPro[j] = rightPro[j + 1] * arr[j + 1];
//   }

//   return leftPro.map((n, i) => n * rightPro[i]);
// };

// console.log(test([1, 2, 3, 4]));

var test = function (arr) {
  let out = [];
  out[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    out[i] = out[i - 1] * arr[i - 1];
  }

  let suffix = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    out[i] *= suffix;
    suffix *= arr[i];
  }

  return out;
};

console.log(test([1, 2, 3, 4]));
