const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let xmax = 0;
let ymax = 0;
for (const p of points) {
    const [x, y] = p;
    xmax = Math.max(xmax, x);
    ymax = Math.max(ymax, y);
}
let min = 101;
for (let i = 0; i <= xmax; i+=2) {
    let count = 0;
    for (let j = 0; j <= ymax; j+=2) {
        let result = [0, 0, 0, 0];
        for (const p of points) {
            const [x, y] = p;
            if (x < i && y < j) {
                result[0] += 1;
            } else if (x < i && y > j) {
                result[1] += 1;
            } else if (x > i && y < j) {
                result[2] += 1;
            } else {
                result[3] += 1;
            }
        }
        count = Math.max(...result);
        min = Math.min(count, min)
    }
}
console.log(min)