const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let max = 0;
let kmin = Math.min(...arr);
let kmax = Math.max(...arr);
for (let k = kmin; k <= kmax; k++) {
    let count = 0;
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if (i !== j && Math.abs(arr[i] - k) === Math.abs(arr[j] - k)) {
                count += 1;
            }
        }
    }
    max = Math.max(max, count);
}

console.log(max);
