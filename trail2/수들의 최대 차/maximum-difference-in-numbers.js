const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let result = 0;
for (let i = 0; i < n; i++) {
    let nums = [arr[i]];
    for (let j = 0; j < n; j++) {
        if (i !== j && arr[i] <= arr[j] && arr[j] <= arr[i] + k) {
            nums.push(arr[j]);
        }
    }
    result = Math.max(result, nums.length);
}
console.log(result)