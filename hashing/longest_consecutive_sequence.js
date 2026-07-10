var test = function (nums) {

    let max = 0;

    let set = new Set(nums);

    for (const n of set) {

        if (set.has(n - 1)) {
            continue;
        }

        let curr = n;
        let count = 1;

        while (set.has(curr + 1)) {
            curr = curr + 1;
            count++;
        }

        max = Math.max(max, count);
    }

    return max;

};

console.log(test([100, 4, 200, 1, 3, 2]));
