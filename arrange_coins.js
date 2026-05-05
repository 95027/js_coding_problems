var arrangeCoins = function (n) {
  let val = 0;
  for (let i = 1; i < n; i++) {
    val += i;
    if (val > n) return i - 1;
  }
  return n;
};

console.log(arrangeCoins(3));
