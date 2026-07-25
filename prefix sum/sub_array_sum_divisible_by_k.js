// function test(nums, k) {

//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum % k === 0) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// console.log(test([4, 5, 0, -2, -3, 1], 5));

function test(nums, k) {

    let count = 0;
    let sum = 0;
    let map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];

        let need = ((sum % k) + k) % k;

        if (map.has(need)) {
            count += map.get(need);
        }

        map.set(need, (map.get(need) || 0) + 1);

    }

    return count;
}

console.log(test([4, 5, 0, -2, -3, 1], 5));