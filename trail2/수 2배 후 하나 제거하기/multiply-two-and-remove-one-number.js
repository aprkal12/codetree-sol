const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let score = 0;
        let tmp = [];
        for (let k = 0; k < n; k++) {
            if (k !== j) {
                if (k === i) {
                    tmp.push(arr[k] * 2)
                } else {
                    tmp.push(arr[k]);
                }
            }
        }
        for (let k = 0; k < n - 2; k++) {
            score += Math.abs(tmp[k] - tmp[k + 1]);
        }
        min = Math.min(min, score)
    }
}
console.log(min)