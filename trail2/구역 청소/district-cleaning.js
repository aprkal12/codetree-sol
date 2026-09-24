const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

// Please Write your code here.
let max = Math.max(b, d);
let min = Math.min(a, c);
let result = 0;
let arr = [];
for (let i = a; i < b; i++) {
    if (arr[i] !== 1) {
        arr[i] = 1;
        result++;
    }
}
for (let i = c; i < d; i++) {
    if (arr[i] !== 1) {
        arr[i] = 1;
        result++;
    }
}
console.log(result);
