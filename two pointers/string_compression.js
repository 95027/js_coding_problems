var compress = function (chars) {

    let out = "";
    let write = 0;

    for (let i = 0; i < chars.length; i++) {
        let curr = chars[i];
        let count = 0;

        let j = i;

        while (j < chars.length && curr === chars[j]) {
            count++;
            j++;
        }

        chars[write] = curr;
        write++;

        if (count > 1) {
            let str = String(count);
            for (let s of str) {
                chars[write] = s;
                write++;
            }
        }

        i += count - 1;
    }

    return write;

};

console.log(compress(["a", "a", "b", "b", "c", "c"]));

