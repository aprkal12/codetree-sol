const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        let sum = arr.reduce((acc, num) => acc + num, 0);
        result = sum - arr[i] - arr[j]
        min = Math.min(min, Math.abs(result - s));
    }
}
console.log(min)