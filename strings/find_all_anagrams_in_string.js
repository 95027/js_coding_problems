var findAnagrams = function (s, p) {
  let out = [];
  for (let i = 0; i <= s.length - p.length; i++) {
    let sub = s.slice(i, p.length + i);

    if (checkAnagram(sub)) {
      out.push(i);
    }
  }

  function checkAnagram(str) {
    if (p.length !== str.length) return false;

    let obj = {};

    for (let s of str) {
      obj[s] = (obj[s] || 0) + 1;
    }

    for (let s of p) {
      if (obj[s] === 0 || obj[s] === undefined) return false;
      obj[s] = obj[s] - 1;
    }

    return true;
  }

  return out;
};

console.log(findAnagrams("cbaebabacd", "abc"));
