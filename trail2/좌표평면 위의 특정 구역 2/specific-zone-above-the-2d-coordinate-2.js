const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let [xmax, ymax] = Array(2).fill(Number.MIN_SAFE_INTEGER);
    let [xmin, ymin] = Array(2).fill(Number.MAX_SAFE_INTEGER);
    for (let j = 0; j < n; j++) {
        if (j !== i) {
            xmax = Math.max(xmax, points[j][0]);
            ymax = Math.max(ymax, points[j][1]);
            xmin = Math.min(xmin, points[j][0]);
            ymin = Math.min(ymin, points[j][1]);
        }
    }
    let size = (xmax - xmin) * (ymax - ymin);
    min = Math.min(min, size);
}
console.log(min)