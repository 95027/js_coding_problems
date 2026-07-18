function test(nums) {

    let out = [];
    let start = 0;

    if (nums.length === 0) return [];

    function addRange(start, end) {
        if (start === end) {
            out.push(`${nums[start]}`);
        } else {
            out.push(`${nums[start]}->${nums[end]}`);
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            continue;
        }
        addRange(start, i);
        start = i + 1;
    }

    if (start < nums.length) {
        addRange(start, nums.length - 1);
    }

    return out;

}

console.log(test([0, 1, 2, 4, 5, 7, 9, 10]));