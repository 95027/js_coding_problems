// var test = function (arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let leader = true;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) {
//         leader = false;
//         break;
//       }
//     }

//     if (leader) count++;
//   }

//   return count;
// };

// console.log(test([16, 17, 4, 3, 5, 2]));

var test = function (arr) {
  let count = 0;
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      count++;
    }
  }

  return count;
};

console.log(test([16, 17, 4, 3, 5, 2]));
