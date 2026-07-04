var test = function (nums) {

    let max = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        if (nums[right] === 1) {
            count++;
        } else {
            count = 0;
        }

        max = Math.max(max, count);

    }

    return max;

};

console.log(test([1, 1, 0, 1, 1, 1]));
