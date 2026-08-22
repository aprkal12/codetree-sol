const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.
let dist = 0;
let result = Number.MAX_SAFE_INTEGER;
for (let j = 1; j < n - 1; j++) {
    let cur = [...arr[0]];
    for (let i = 1; i < n; i++) {
        if (i !== j) {
            dist += Math.abs(cur[0] - arr[i][0]) + Math.abs(cur[1] - arr[i][1]);
            cur[0] = arr[i][0];
            cur[1] = arr[i][1];
        }
    }
    if (result > dist) {
        result = dist;
    }
    dist = 0;
}
console.log(result)
