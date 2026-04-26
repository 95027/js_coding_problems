// var isValid = function (s) {
//   const stack = [];

//   for (let c of s) {
//     if (c == "{" || c == "[" || c == "(") {
//       stack.push(c);
//     } else {
//       const last = stack.pop();
//       if (
//         (c == ")" && last !== "(") ||
//         (c === "}" && last !== "{") ||
//         (c === "]" && last !== "[")
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// console.log(isValid("([]{}"));

var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let c of s) {
    if (map[c]) {
      stack.push(c);
    } else {
      const last = stack.pop();
      if (!last || map[last] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("("));
