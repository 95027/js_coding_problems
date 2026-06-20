var longestPalindrome = function (s) {
  let pal = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (j - i <= pal.length) break;
      let sliced = s.slice(i, j);
      if (checkPalindrom(sliced)) {
        pal = sliced;
        break;
      }
    }
  }

  function checkPalindrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  return pal;
};

console.log(longestPalindrome("bsabad"));
