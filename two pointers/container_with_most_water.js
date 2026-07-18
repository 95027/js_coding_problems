// function test(height) {

//     let max = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let distance = j - i;
//             let area = (Math.min(height[i], height[j])) * distance;
//             max = Math.max(max, area);
//         }
//     }
//     return max;

// }

// console.log(test([1, 8, 6, 2, 5, 4, 8, 3, 7]));


function test(height) {

    let max = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let distance = right - left;
        let area = Math.min(height[left], height[right]) * distance;
        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

    }
    return max;

}

console.log(test([1, 8, 6, 2, 5, 4, 8, 3, 7]));