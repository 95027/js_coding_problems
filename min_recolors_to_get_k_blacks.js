var minimumRecolors = function (blocks, k) {
  let min = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] !== "B") {
      count++;
    }
  }

  min = count;

  for (let i = 1; i <= blocks.length - k; i++) {
    if (blocks[i - 1] !== "B") {
      count--;
    }

    if (blocks[i + k - 1] !== "B") {
      count++;
    }

    min = Math.min(count, min);
  }

  return min;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
