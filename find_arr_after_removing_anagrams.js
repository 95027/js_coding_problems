var removeAnagrams = function (words) {
  let out = [words[0]];

  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1].split("").sort().join("");
    let curr = words[i].split("").sort().join("");
    if (prev !== curr) {
      out.push(words[i]);
    }
  }
  return out;
};

console.log(removeAnagrams(["a", "b", "a"]));
