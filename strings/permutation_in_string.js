var checkInclusion = function (s1, s2) {
  s1 = s1.split("").sort().join("");

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let cur = s2.slice(i, i + s1.length);

    if (s1 === cur.split("").sort().join("")) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
