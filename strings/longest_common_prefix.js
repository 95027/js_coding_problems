var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let first = strs[0];

  for (let i = 0; i < first.length; i++) {
    let prefix = first.slice(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

console.log(longestCommonPrefix(["flower", "floor", "flood"]));
