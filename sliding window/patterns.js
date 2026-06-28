// Sum of Every Subarray of Size K

function test(arr, k) {
  let out = [];

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  out.push(sum);

  for (let i = 1; i <= arr.length - k; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    out.push(sum);
  }

  return out;
}

console.log(test([1, 2, 3, 4, 5], 3));

// Maximum Sum of a Subarray of Size K

function test(arr, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let max = sum;

  for (let i = 1; i <= arr.length - k; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    max = Math.max(sum, max);
  }

  return max;
}

console.log(test([2, 1, 5, 1, 3, 2], 3));

// First Negative Number in Every Window of Size K

// function test(arr, k) {
//   let out = [];

//   for (let i = 0; i <= arr.length - k; i++) {
//     let found = false;
//     for (let j = i; j < k + i; j++) {
//       if (arr[j] < 0) {
//         out.push(arr[j]);
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       out.push(0);
//     }
//   }

//   return out;
// }

// console.log(test([2, -1, 3, -4, 5, -6], 3));

function test(arr, k) {
  let out = [];
  let queue = [];

  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
      queue.push(i);
    }
  }

  queue.length === 0 ? out.push(0) : out.push(arr[queue[0]]);

  for (let i = 1; i <= arr.length - k; i++) {
    if (queue[0] < i) {
      queue.shift();
    }

    if (arr[i + k - 1] < 0) {
      queue.push(i + k - 1);
    }

    queue.length === 0 ? out.push(0) : out.push(arr[queue[0]]);
  }

  return out;
}

console.log(test([2, -1, 3, -4, 5, -6], 3));

// Count Distinct Elements in Every Window

function test(arr, k) {
  let out = [];

  let map = new Map();

  for (let i = 0; i < k; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  out.push(map.size);

  for (let i = 1; i <= arr.length - k; i++) {
    if (map.get(arr[i - 1]) > 1) {
      map.set(arr[i - 1], map.get(arr[i - 1]) - 1);
    } else {
      map.delete(arr[i - 1]);
    }
    if (map.has(arr[i + k - 1])) {
      map.set(arr[i + k - 1], map.get(arr[i + k - 1]) + 1);
    } else {
      map.set(arr[i + k - 1], 1);
    }
    out.push(map.size);
  }

  return out;
}

console.log(test([1, 2, 1, 3, 4, 2, 3], 4));
