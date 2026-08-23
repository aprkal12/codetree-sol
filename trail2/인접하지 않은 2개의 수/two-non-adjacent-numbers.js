const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (Math.abs(i - j) > 1) {
            max = Math.max(max, arr[i] + arr[j])
        }
    }
}
console.log(max)