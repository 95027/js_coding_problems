var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }

  max = count;

  for (let i = 1; i <= s.length - k; i++) {
    let index = s[i - 1];
    if (vowels.has(index)) {
      count--;
    }
    if (vowels.has(s[i + k - 1])) {
      count++;
    }
    max = Math.max(max, count);
  }

  return max;
};

console.log(maxVowels("abciiidef", 3));
