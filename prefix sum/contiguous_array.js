// function test(nums) {

//     let length = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let zeros = 0;
//         let ones = 0;

//         for (let j = i; j < nums.length; j++) {

//             if (nums[j] === 0) {
//                 zeros++;
//             } else {
//                 ones++;
//             }

//             if (zeros === ones) {
//                 length = Math.max(length, j - i + 1);
//             }
//         }

//     }

//     return length;
// }

// console.log(test([0, 1, 1, 1, 1, 1, 0, 0, 0]));


function test(nums) {

    let length = 0;
    let map = new Map();
    let sum = 0;

    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {

        nums[i] === 0 ? sum -= 1 : sum += 1;

        if (map.has(sum)) {
            length = Math.max(length, i - map.get(sum));
        } else {
            map.set(sum, i);
        }

    }

    return length;
}

console.log(test([0, 1, 1, 1, 1, 1, 0, 0, 0]));