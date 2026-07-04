var test = function (nums, k) {

    let zeros = 0;
    let max = 0;

    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] === 0) {
            zeros++;
        }

        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);

    }

    return max;

};

console.log(test([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));