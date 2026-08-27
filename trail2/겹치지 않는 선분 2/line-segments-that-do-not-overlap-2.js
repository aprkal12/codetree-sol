const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.
let count = 0;
for (let i = 0; i < n; i++) {
    const [x1, y1] = segments[i];
    let flag = true;
    for (let j = 0; j < n; j++) {
        if (i !== j) {
            const [x2, y2] = segments[j];
            if (x1 < x2 && y1 < y2) {
                flag = true;
            } else if (x1 > x2 && y1 > y2) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    if (flag) {
        count++;
    }
}
console.log(count);