var reverseVowels = function (s) {

    let set = new Set(["a", "e", "i", "o", "u"]);

    s = s.split("");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !set.has(s[left].toLowerCase())) {
            left++;
        }

        while (left < right && !set.has(s[right].toLowerCase())) {
            right--;
        }

        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;

    }

    return s.join("");

};

console.log(reverseVowels("IceCreAm"));




