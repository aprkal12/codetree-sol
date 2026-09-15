const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.
let result = 101;
let maxList = [];
for (let i = 0; i < n; i++) {
    let num = arr[i];
    let cur = 0;
    let stones = [arr[0]];
    for (let j = 1; j < n; j++) {
        if (arr[j] <= num) {
            if (Math.abs(cur - j) > k) {
                break;
            } else {
                cur = j;
                stones.push(arr[j]);
            }
        }
    }
    if (cur === n - 1) {
        maxList.push(Math.max(...stones))
        result = Math.min(result, ...maxList);
    }
}
console.log(result)