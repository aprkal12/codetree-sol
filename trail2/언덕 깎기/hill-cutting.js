const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
    hills.push(Number(input[i]));
}

// Please Write your code here.
let min = Math.min(...hills);
let max = Math.max(...hills);
let result = Number.MAX_SAFE_INTEGER;
for (let i = min; i <= max; i++) {
    let cost = 0;
    for (let j = 0; j < n; j++) {
        let num = hills[j];
        if (num < i) {
            cost += (i - num) * (i - num);
        } else if (num > (i + 17)) {
            cost += (num - (i + 17)) * (num - (i + 17));
        }
    }
    result = Math.min(result, cost);
}
console.log(result);

