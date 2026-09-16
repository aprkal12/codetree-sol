const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
let result = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] !== '1') {
        seat[i] = '1';
        for (let j = 0; j < n; j++) {
            if (i !== j && seat[j] !== '1') {
                seat[j] = '1';
                let dist = 0;
                let min = n + 1;
                let cur = -1;
                for (let k = 0; k < n; k++) {
                    if (cur === -1 && seat[k] === '1') {
                        cur = k;
                    } else if (seat[k] === '1') {
                        dist = Math.abs(k - cur);
                        min = Math.min(min, dist);
                        cur = k;

                    }
                }
                result = Math.max(result, min);
                seat[j] = '0';
            }
        }
        seat[i] = '0';
    }
}
console.log(result);