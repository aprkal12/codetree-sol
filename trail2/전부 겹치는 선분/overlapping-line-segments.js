const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
let min = 101;
let max = -1;
for (const seg of segments) {
    min = Math.min(min, ...seg);
    max = Math.max(max, ...seg);
}
let result = 'No';
let arr = [];
for (const seg of segments) {
    const [x1, x2] = seg;
    for (let i = x1; i <= x2; i++) {
        arr[i] = (arr[i] ?? 0) + 1;
    }
}
for (let i = min; i <= max; i++) {
    if (arr[i] >= n) {
        result = 'Yes';
    }
}
console.log(result)