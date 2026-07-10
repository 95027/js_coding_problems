function maxSlidingWindow(nums, k) {

    let out = [];
    let max = -Infinity;
    let map = {};

    for (let i = 0; i < k; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        max = Math.max(max, nums[i]);
    }

    out.push(max);

    for (let i = k; i < nums.length; i++) {
        map[nums[i - k]] = map[nums[i - k]] - 1;

        max = -Infinity;

        if (map[nums[i - k]] === 0) {
            delete map[nums[i - k]];
        }

        map[nums[i]] = (map[nums[i]] || 0) + 1;

        for (let j in map) {
            console.log(j);
            max = Math.max(max, j);
        }

        out.push(max);
    }
    return out;

}


console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));