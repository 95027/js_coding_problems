function test(nums) {

    if (nums.length === 0) return [];

    nums.sort((a, b) => a[0] - b[0]);

    let out = [];
    let curr = [...nums[0]];

    for (let i = 1; i < nums.length; i++) {

        let next = nums[i];

        if (curr[1] >= next[0]) {
            curr[1] = Math.max(curr[1], next[1]);
        } else {
            out.push(curr);
            curr = [...next];
        }
    }

    out.push(curr);

    return out;

}

console.log(test([[1, 3], [2, 6], [5, 8], [10, 12]]));