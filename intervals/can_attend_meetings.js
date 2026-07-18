function test(nums) {

    nums = nums.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1];
        let curr = nums[i];

        if (prev[1] > curr[0]) {
            return false;
        }
    }
    return true;

}

console.log(test([[7, 10], [2, 4], [5, 6]]));