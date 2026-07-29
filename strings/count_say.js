var countAndSay = function (n) {

    let out = "1";

    for (let i = 1; i < n; i++) {

        let j = 0;
        let next = "";
        while (j < out.length) {
            let curr = out[j];
            let count = 0;

            while (j < out.length && out[j] === curr) {
                count++;
                j++;
            }

            next += count + curr;
        }

        out = next;

    }

    return out;
};

console.log(countAndSay(5));
