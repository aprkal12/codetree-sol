const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
    const [x, c] = input[i].split(' ');
    people.push([Number(x), c]);
}

// Please Write your code here.
let tmp = []
for (const p of people) {
    const [x, c] = p;
    tmp.push(x);
}
let arr = Array(Math.max(...tmp) + 1).fill(0)
for (const p of people) {
    const [x, c] = p;
    arr[x] = c;
}
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
for (let i = 1; i <= k + 1; i++) {
    if (arr[i] === 'G') {
        sum += 1;
    } else if (arr[i] === 'H') {
        sum += 2;
    }
}
max = Math.max(max, sum);
for (let i = 2; i < arr.length - k; i++) {
    if (arr[i-1] === 'G') {
        sum -= 1;
    } else if (arr[i-1] === 'H') {
        sum -= 2;
    }
    if (arr[i + k] === 'G') {
        sum += 1;
    } else if (arr[i + k] === 'H') {
        sum += 2;
    }
    max = Math.max(max, sum)
}
console.log(max)
