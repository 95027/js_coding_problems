// function test(str) {
//   //   return str.split("").reverse().join("");
//   let out = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     out += str[i];
//   }
//   return out;
// }
// console.log(test("hello"));

function test(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}
console.log(test("hello"));
