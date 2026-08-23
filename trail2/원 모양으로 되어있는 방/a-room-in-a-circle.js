const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let dist = 0;
    for (let j = 0; j < n; j++) {
        dist += (arr[(i + j) % n] * j)
    }
    if (min > dist) {
        min = dist;
    }
}
console.log(min)