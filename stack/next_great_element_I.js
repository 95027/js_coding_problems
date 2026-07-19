// var nextGreaterElement = function (nums1, nums2) {

//     let out = [];

//     for (let i = 0; i < nums1.length; i++) {
//         let curr = nums1[i];
//         let index = nums2.indexOf(curr);

//         let k = -1;

//         for (let j = index + 1; j < nums2.length; j++) {
//             if (nums2[j] > curr) {
//                 k = nums2[j];
//                 break;
//             }
//         }
//         out.push(k);
//     }

//     return out;

// };

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));


// var nextGreaterElement = function (nums1, nums2) {

//     let out = [];
//     let map = {};

//     nums2.forEach((num, i) => {
//         map[num] = i;
//     });

//     for (let i = 0; i < nums1.length; i++) {
//         let curr = nums1[i];
//         let index = map[curr];

//         let k = -1;

//         for (let j = index + 1; j < nums2.length; j++) {
//             if (nums2[j] > curr) {
//                 k = nums2[j];
//                 break;
//             }
//         }
//         out.push(k);
//     }

//     return out;

// };

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));


var nextGreaterElement = function (nums1, nums2) {

    let stack = [];
    let map = {};

    for (let num of nums2) {

        while (stack.length && num > stack[stack.length - 1]) {
            let top = stack.pop();
            map[top] = num;
        }
        stack.push(num);
    }

    while (stack.length) {
        let top = stack.pop();
        map[top] = -1;
    }

    let out = [];

    for (let n of nums1) {
        out.push(map[n]);
    }

    return out;

};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));