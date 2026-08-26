const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let min = Number.MAX_SAFE_INTEGER;
let gap = arr.map((el) => Math.abs(el - h));

let tmpcost = 0;
for (let i = 0; i < t; i++) {
    tmpcost += gap[i];
}
min = Math.min(min, tmpcost)
for (let i = 0; i < n - t; i++) {
    tmpcost -= gap[i];
    tmpcost += gap[i + t];
    min = Math.min(min, tmpcost);
}
console.log(min);