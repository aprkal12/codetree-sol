const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const arr = Array.from(Array(200), () => Array(200).fill(0));
let result = 0
for (const rect of rects) {
    const [rx, ry] = rect;
    const [x, y] = [rx + 100, ry + 100];
    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            arr[i][j] += 1;
        }
    }
}
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] > 0) {
            result += 1;
        }
    }
}
console.log(result)