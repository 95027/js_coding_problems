// for non sorted arrays
var test = function (a1, a2) {
  let set = new Set();
  let set2 = new Set(a2);

  for (let n of a1) {
    if (set2.has(n) && !set.has(n)) {
      set.add(n);
    }
  }

  return [...set];
};

console.log(test([1, 2, 2, 1], [2, 2]));

// for sorted arrays
var test = function (a1, a2) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      i++;
    } else if (a1[i] > a2[j]) {
      j++;
    } else {
      result.push(a1[i]);
      i++;
      j++;
    }
  }

  return result;
};

console.log(test([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
