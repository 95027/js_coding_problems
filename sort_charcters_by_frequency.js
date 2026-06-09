var frequencySort = function (s) {
  let counts = {};

  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }

  let arr = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  let res = "";

  for (let c of arr) {
    res += c.repeat(counts[c]);
  }

  return res;
};

console.log(frequencySort("trrree"));
