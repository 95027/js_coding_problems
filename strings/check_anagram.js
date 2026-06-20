// function test(s1, s2) {
//   if (s1.length !== s2.length) return false;
//   s1 = s1.split("").sort().join("");
//   s2 = s2.split("").sort().join("");

//   return s1 === s2;
// }

// console.log(test("listen", "silen"));

var test = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  let counts = {};
  for (let s of s1) {
    counts[s] = (counts[s] || 0) + 1;
  }

  for (let s of s2) {
    if (!counts[s]) {
      return false;
    }
    counts[s] -= 1;
  }

  return true;
};

console.log(test("listen", "silent"));
