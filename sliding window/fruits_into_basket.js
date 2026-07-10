var test = function (arr) {

    let map = new Map();

    let left = 0;

    let max = 0;

    for (let right = 0; right < arr.length; right++) {

        map.set(arr[right], (map.get(arr[right]) || 0) + 1);

        while (map.size > 2) {
            map.set(arr[left], map.get(arr[left]) - 1);
            if (map.get(arr[left]) === 0) {
                map.delete(arr[left]);
            }
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;

};

console.log(test([0, 1, 2, 2]));
