const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let max = 0;
for (let i = 0; i < n; i++) {
    let count = 0;
    let arr = Array(4).fill(false);
    let tmp = false;
    arr[i + 1] = true;
    for (let j = 1; j <= n; j++) {
        let [a, b, c] = commands[j - 1];
        tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
        if (arr[c]) {
            count++;
        }
    }
    max = Math.max(max, count);
}
console.log(max)