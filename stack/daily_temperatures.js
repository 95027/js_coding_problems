// var dailyTemperatures = function (temperatures) {

//     let out = [];

//     for (let i = 0; i < temperatures.length; i++) {
//         let days = 0;
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 days = j - i;
//                 break;
//             }
//         }
//         out.push(days);
//     }
//     return out;

// };

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));


var dailyTemperatures = function (temperatures) {

    let stack = [];
    let out = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prev = stack.pop();
            out[prev] = i - prev;
        }
        stack.push(i);
    }

    return out;

};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));