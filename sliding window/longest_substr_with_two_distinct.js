var test = function (str) {

    let obj = {};

    let left = 0;

    let max = 0;

    for (let right = 0; right < str.length; right++) {

        obj[str[right]] = (obj[str[right]] || 0) + 1;

        while (Object.keys(obj).length > 2) {
            obj[str[left]]--;
            if (obj[str[left]] === 0) {
                delete obj[str[left]];
            }
            left++;
        }

        max = Math.max(max, right - left + 1);

    }

    return max;
};

console.log(test("eceba"));
