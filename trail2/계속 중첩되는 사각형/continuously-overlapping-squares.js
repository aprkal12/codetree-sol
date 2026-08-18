const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

const arr = Array.from(Array(200), () => Array(200).fill(0))
let flag = true;

for (const rect of rectangles) {
    const [x1, y1, x2, y2] = rect.map((r) => r + 100);
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            if (flag) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = 2;
            }
            
        }
    }
    flag = !flag;
}
let result = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 2) {
            result += 1;
        }
    }
}
console.log(result);