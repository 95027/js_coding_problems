var test = function (x) {

    const sign = x < 0 ? -1 : 1;

    let res = "";

    Math.abs(x).toString().split("").forEach((n) => res = n + res);

    res = Number(res) * sign;

    if (res < -(2 ** 31) || res > (2 ** 31) - 1) {
        return 0;
    }
    return res;

};

console.log(test(123));