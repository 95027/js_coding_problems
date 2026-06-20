var lengthOfLongestSubstring = function (s) {
  let out = "";

  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    let cur = "";
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        cur += s[j];
        if (out.length < cur.length) {
          out = cur;
        }
      } else {
        break;
      }
    }
  }

  return out;
};

console.log(lengthOfLongestSubstring("pwwkew"));
