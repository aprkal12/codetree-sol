const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.
let max = 0
for (let i = 0; i < n; i++) {
    let [xmax, ymax] = Array(2).fill(0);
    for (let j = 0; j < n; j++) {
        if (j !== i) {
            if (points[i][1] === points[j][1]) {
                xmax = Math.max(xmax, Math.abs(points[j][0] - points[i][0]));
            } else if (points[i][0] === points[j][0]) {
                ymax = Math.max(ymax, Math.abs(points[j][1] - points[i][1]));
            }
        }
    }
    let size = xmax * ymax;
    max = Math.max(max, size);
}
console.log(max)

