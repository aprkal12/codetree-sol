const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let start = 1;
let flag = false
while (!flag) {
    flag = false;
    result = start
    for (let i = 0; i < n; i++) {
        result *= 2
        const [n1, n2] = conditions[i];
        if (result < n1 || result > n2) {
            flag = false;
            break;
        } else {
            flag = true;
        }
    }
    start++;
}
console.log(start - 1)
