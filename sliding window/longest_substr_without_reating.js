// var lengthOfLongestSubstring = function (s) {
//   let out = "";

//   for (let i = 0; i < s.length; i++) {
//     let set = new Set();
//     let cur = "";
//     for (let j = i; j < s.length; j++) {
//       if (!set.has(s[j])) {
//         set.add(s[j]);
//         cur += s[j];
//         if (out.length < cur.length) {
//           out = cur;
//         }
//       } else {
//         break;
//       }
//     }
//   }

//   return out;
// };

// console.log(lengthOfLongestSubstring("pwwkew"));

// var test = function (str) {
//   let set = new Set();

//   let left = 0;
//   let max = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[right]);

//     max = Math.max(max, right - left + 1);
//   }

//   return max;
// };

// console.log(test("abcads"));

var test = function (str) {
  let set = new Set();

  let left = 0;
  let max = 0;
  let start = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    let len = right - left + 1;

    if (len > max) {
      max = len;
      start = left;
    }
  }

  return str.slice(start, start + max);
};

console.log(test("abcads"));
