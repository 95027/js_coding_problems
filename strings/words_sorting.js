// function test(n) {
//   let oddSum = 0;
//   let evenSum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }

//   return { oddSum, evenSum };
// }

// console.log(test(20));

function test(s) {
  let even = [];
  let odd = [];
  s.split(" ")
    .sort((a, b) => a.length - b.length)
    .forEach((w) => {
      if (w.length % 2 === 0) {
        even.push(w);
      } else {
        odd.push(w);
      }
    });
  return { even, odd };
}

console.log(test("So memory does not grow with input size"));
