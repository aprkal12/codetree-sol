const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let arr = p.sort((a, b) => b - a);
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    arr[i] /= 2;
    let budget = b;
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (budget >= arr[n - j - 1]) {
            count++;
            budget -= arr[n - j - 1];
        }
    }
    max = Math.max(max, count);
    arr[i] *= 2;
}
console.log(max)