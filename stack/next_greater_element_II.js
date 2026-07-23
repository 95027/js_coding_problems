var nextGreaterElements = function (nums) {

    let stack = [];
    let out = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length * 2; i++) {

        let index = i % nums.length;

        while (stack.length && nums[index] > nums[stack[stack.length - 1]]) {
            let pop = stack.pop();
            out[pop] = nums[index];
        }

        if (i < nums.length) {
            stack.push(index);
        }
    }

    return out;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));

