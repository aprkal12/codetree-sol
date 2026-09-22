const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let result = Number.MAX_SAFE_INTEGER;
let min = Math.min(...arr);
let max = Math.max(...arr)
for (let i = min; i <= max; i++) {
    let cost = 0;
    for (let j = 0; j < n; j++) {
        let l = i - k
        if (i < arr[j]) {
            cost += arr[j] - i;
        } else if (l > arr[j]) {
            cost += l - arr[j];
        }
    }
    result = Math.min(result, cost)
}
console.log(result)