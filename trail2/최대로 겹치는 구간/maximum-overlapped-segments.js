const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
const arr = new Array(200).fill(0);
let result = 0;
for (const seg of segments) {
    for (let i = seg[0] + 100; i < seg[1] + 100; i++) {
        arr[i] += 1;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
        result = arr[i]
    }
}
console.log(result)

