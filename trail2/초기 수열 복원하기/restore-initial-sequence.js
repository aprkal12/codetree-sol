const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const sums = n >= 2 ? input[1].split(' ').map(Number) : [];

// Please write your code here.
let result = [];
for (let i = 1; i <= n; i++) {
    result = [i];
    let check = Array(n + 1).fill(false);
    check[i] = true;
    let flag = true;
    for (let j = 0; j < n - 1; j++) {
        let cur = sums[j] - result[j];
        if (cur < 1 || cur > n || check[cur]) {
            flag = false;
            break;
        }
        check[cur] = true;
        result.push(cur);
    }
    if (flag) {
        break;
    }
}
console.log(...result)
