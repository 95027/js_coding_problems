var groupAnagrams = function (strs) {
  let set = {};

  for (let str of strs) {
    let key = str.split("").sort().join("");
    if (set[key]) {
      set[key].push(str);
    } else {
      set[key] = [str];
    }
  }

  return Object.values(set);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
