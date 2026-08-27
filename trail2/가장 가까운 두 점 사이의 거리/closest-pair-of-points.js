const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        let dist = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2;
        min = Math.min(min, dist);
    }
}
console.log(min)