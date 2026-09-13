const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

// Please Write your code here.
let result = 0;
for (let j = 1; j <= n; j++) {
    let p = j;
    let num = 0;
    for (let i = 0; i < m; i++) {
        next = arr[p];
        num += arr[p];
        p = next;
    }
    result = Math.max(result, num);
}
console.log(result);