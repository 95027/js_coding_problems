var test = function (s, k) {

    let map = new Map();
    let maxFreq = 0;
    let maxLen = 0;

    let left = 0;

    for (let right = 0; right < s.length; right++) {

        map.set(s[right], (map.get(s[right]) || 0) + 1);

        maxFreq = Math.max(maxFreq, map.get(s[right]));


        while (right - left + 1 - maxFreq > k) {
            map.set(s[left], (map.get(s[left]) || 0) - 1);

            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);

    }

    return maxLen;

};

console.log(test("AABABBA", 1));
