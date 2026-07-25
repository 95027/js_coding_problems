// function test(nums, goal) {

//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];

//             if (sum > goal) {
//                 break;
//             }

//             if (sum === goal) {
//                 count++;
//             }

//         }
//     }

//     return count;
// }

// console.log(test([1, 0, 1, 0, 1], 2));

function test(nums, goal) {

    let count = 0;
    let sum = 0;
    let map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];

        let need = sum - goal;

        if (map.has(need)) {
            count += map.get(need);
        }

        map.set(sum, (map.get(sum) || 0) + 1);

    }

    return count;
}

console.log(test([1, 0, 1, 0, 1], 2));