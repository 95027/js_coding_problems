function test(intervals, newInterval) {

    if (intervals.length === 0) return [newInterval];

    intervals.push(newInterval);

    intervals.sort((a, b) => a[0] - b[0]);

    let out = [];

    let curr = [...intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

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

console.log(test([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));