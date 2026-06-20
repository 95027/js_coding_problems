var canConstruct = function (ransomNote, magazine) {
  let counts = {};

  for (let c of magazine) {
    counts[c] = (counts[c] || 0) + 1;
  }

  for (let c of ransomNote) {
    if (!counts[c]) return false;
    counts[c]--;
  }

  return true;
};
console.log(canConstruct("a", "bba"));
