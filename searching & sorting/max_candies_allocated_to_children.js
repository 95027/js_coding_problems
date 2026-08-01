var maximumCandies = function (candies, k) {

    let left = 1;
    let right = Math.max(...candies);
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canDo(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;

    function canDo(c) {
        let count = 0;
        for (let ca of candies) {
            count += Math.floor(ca / c);
        }
        return count >= k;
    }

};

console.log(maximumCandies([5, 8, 6], 3));
