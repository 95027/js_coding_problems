function test(intervals) {

    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    let count = 0;

    let curr = [...intervals[0]];


    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        if (curr[1] <= next[0]) {
            curr = [...next];
        } else {
            curr[1] = Math.min(curr[1], next[1]);
            count++;
        }
    }

    return count;

}

console.log(test([[1, 2], [2, 3], [3, 4], [1, 3]]));