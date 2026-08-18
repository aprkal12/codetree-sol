const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const arr = Array.from(Array(2000), () => Array(2000).fill(0));
let [xmin, ymin, xmax, ymax] = [2000, 2000, 0, 0];
const sol = [rectA, rectB, rectM];
let count = 0
let result = 0;

for (const rect of sol) {
    const [rx1, ry1, rx2, ry2] = rect;
    const [x1, x2, y1, y2] = [rx1 + 1000, rx2 + 1000, ry1 + 1000, ry2 + 1000];
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            if (count < 2) {
                arr[i][j] += 1;
            } else {
                arr[i][j] += 2;
            }

        }
    }
    count += 1;
    xmax = x2 > xmax ? x2 : xmax;
    xmin = x1 < xmin ? x1 : xmin;
    ymax = y2 > ymax ? y2 : ymax;
    ymin = y1 < ymin ? y1 : ymin;
}
for (let i = ymin; i < ymax; i++) {
    for (let j = xmin; j < xmax; j++) {
        if (arr[i][j] === 1) {
            result += 1;
        }
    }
}
console.log(result)