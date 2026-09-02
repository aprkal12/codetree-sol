const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const pArr = [];
const sArr = [];
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    pArr.push(p);
    sArr.push(s);
}

// Please Write your code here.
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let count = 0;
    let budget = b;
    let tmpPrice = [];
    for (let j = 0; j < n; j++) {
        if (i === j) {
            tmpPrice[j] = pArr[j] / 2 + sArr[j];
        } else {
            tmpPrice[j] = pArr[j] + sArr[j];
        }
    }
    tmpPrice = tmpPrice.sort((a,b) => a-b);
    for (let j = 0; j < n; j++) {
        let total = tmpPrice[j]
        if (budget >= total) {
            count++;
            budget -= total;
        }
    }
    max = Math.max(max, count);
}
console.log(max)