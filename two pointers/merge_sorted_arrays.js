var test = function (arr1, arr2) {
  let i = 0;
  let j = 0;

  let out = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    out.push(arr1[i++]);
  }

  while (j < arr2.length) {
    out.push(arr2[j++]);
  }

  return out;
};

console.log(test([1, 3, 5, 7], [2, 4, 6, 8]));
