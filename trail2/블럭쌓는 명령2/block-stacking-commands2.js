const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const arr = new Array(n+1).fill(0);
for (const segment of segments) {
    const [seg1, seg2] = segment;
    for (let i = seg1; i <= seg2; i++) {
        arr[i] += 1;
    }
}
console.log(Math.max(...arr))