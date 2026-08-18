const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const arr = Array.from(Array(200), () => Array(200).fill(0))
let xmax = 0
let ymax = 0
let xmin = 200
let ymin = 200
let result = 0
for (const rect of rects) {
    const [rx1, ry1, rx2, ry2] = rect;
    const x1 = Number(rx1) + 100
    const x2 = Number(rx2) + 100
    const y1 = Number(ry1) + 100
    const y2 = Number(ry2) + 100
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            arr[i][j] += 1;
        }
    }
    xmax = x2 > xmax ? x2 : xmax;
    xmin = x1 < xmin ? x1 : xmin;
    ymax = y2 > ymax ? y2 : ymax;
    ymin = y1 < ymin ? y1 : ymin;
}
for (let i = ymin; i < ymax; i++) {
    for (let j = xmin; j < xmax; j++) {
        if (arr[i][j] > 0) {
            result += 1;
        }
    }
}
console.log(result)