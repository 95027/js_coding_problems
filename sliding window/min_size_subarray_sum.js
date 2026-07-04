var test = function (nums, tar) {

    let length = Infinity;

    let left = 0;

    let sum = 0;

    for (let right = 0; right < nums.length; right++) {

        sum += nums[right];

        while (sum >= tar) {
            length = Math.min(length, right - left + 1);
            sum -= nums[left];
            left++;
        }

    }

    return length === Infinity ? 0 : length;

};

console.log(test([2, 3, 1, 2, 4, 3], 7));
