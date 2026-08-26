const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.
let n = arr.length
let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
let total = 0;
arr.forEach((a) => {
    total += a;
})
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            sum = arr[i] + arr[j] + arr[k];
            min = Math.min(min, Math.abs((total - sum) - sum));
        }
    }
}
console.log(min)