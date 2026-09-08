const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let maxh = Math.max(0, ...h);
let result = 0;
for (let i = 0; i < maxh; i++) {
    let count = 0;
    let block = false;
    for (let j = 0; j < n; j++) {
        if (h[j] > i && !block) {
            count++;
            block = true;
        } else if (h[j] <= i) {
            block = false;
        }
    }
    result = Math.max(result, count);
}
console.log(result)
