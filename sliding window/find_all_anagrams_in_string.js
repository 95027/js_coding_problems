// var findAnagrams = function (s, p) {
//   let out = [];
//   for (let i = 0; i <= s.length - p.length; i++) {
//     let sub = s.slice(i, p.length + i);

//     if (checkAnagram(sub)) {
//       out.push(i);
//     }
//   }

//   function checkAnagram(str) {
//     if (p.length !== str.length) return false;

//     let obj = {};

//     for (let s of str) {
//       obj[s] = (obj[s] || 0) + 1;
//     }

//     for (let s of p) {
//       if (obj[s] === 0 || obj[s] === undefined) return false;
//       obj[s] = obj[s] - 1;
//     }

//     return true;
//   }

//   return out;
// };

// console.log(findAnagrams("cbaebabacd", "abc"));


var findAnagrams = function (s, p) {
  let out = [];

  let tar = {};
  let window = {};

  for (let i = 0; i < p.length; i++) {
    tar[p[i]] = (tar[p[i]] || 0) + 1;
    window[s[i]] = (window[s[i]] || 0) + 1;
  }

  if (checkAnagram()) {
    out.push(0);
  }


  for (let i = 1; i <= s.length - p.length; i++) {

    window[s[i - 1]]--;

    if (window[s[i - 1]] === 0) {
      delete window[s[i - 1]];
    }

    window[s[i + p.length - 1]] = (window[s[i + p.length - 1]] || 0) + 1;

    if (checkAnagram()) {
      out.push(i);
    }
  }

  function checkAnagram() {

    for (let ch in tar) {
      if (tar[ch] !== window[ch]) {
        return false;
      }
    }

    return true;
  }

  return out;
};

console.log(findAnagrams("cbaebabacd", "abc"));

