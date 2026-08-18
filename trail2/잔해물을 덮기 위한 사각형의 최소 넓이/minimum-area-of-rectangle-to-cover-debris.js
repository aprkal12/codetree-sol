const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const arr = Array.from(Array(2000), () => Array(2000).fill(0))
let result = 0;
let [xmin, xmax, ymin, ymax] = [2000, 0, 2000, 0];
const [r1x1, r1x2, r1y1, r1y2] = [rect1[0] + 1000, rect1[2] + 1000, rect1[1] + 1000, rect1[3] + 1000];
const [r2x1, r2x2, r2y1, r2y2] = [rect2[0] + 1000, rect2[2] + 1000, rect2[1] + 1000, rect2[3] + 1000];

for (let i = r1y1; i < r1y2; i++) {
    for (let j = r1x1; j < r1x2; j++) {
        arr[i][j] += 1;
    }
}
for (let i = r2y1; i < r2y2; i++) {
    for (let j = r2x1; j < r2x2; j++) {
        arr[i][j] += 2;
    }
}
if (r1x1 >= r2x1 && r1x2 <= r2x2 && r1y1 >= r2y1 && r1y2 <= r2y2) {
    console.log(0);
} else {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                xmin = j < xmin ? j : xmin;
                xmax = j + 1 > xmax ? j + 1 : xmax;
                ymin = i < ymin ? i : ymin;
                ymax = i + 1 > ymax ? i + 1 : ymax;
            }
        }
    }
    console.log((xmax - xmin) * (ymax - ymin))
}
