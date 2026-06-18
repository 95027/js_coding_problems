// selection sort means find min and place at 0th index and move on
var selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let min = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
};

console.log(selectionSort([3, 2, 3, 1, 2, 4, 5, 5, 6]));

// bubble sort means compare adjacent values and swap, like wise max goes to last
var bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
};

console.log(bubbleSort([3, 2, 3, 1, 2, 4, 5, 5, 6]));



// insertion sort means make sorted array from zero and find index place there
var insertionSort = (nums) => {
  let out = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let inserted = false;
    for (let j = 0; j < out.length; j++) {
      if (out[j] > nums[i]) {
        out.splice(j, 0, nums[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      out.push(nums[i]);
    }
  }

  return out;
};

console.log(insertionSort([3, 2, 3, 1, 2, 4, 5, 5, 6]));
