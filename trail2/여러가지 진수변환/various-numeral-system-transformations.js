const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.

const arr = new Array(10).fill(0)
let result = ''
let i = 0;
if (n === 1) {
    result = 1;
} else {
    while (n >= 1) {
        arr[i++] = n % b;
        n = Math.floor(n / b);
    }
    for (i = i - 1; i >= 0; i--) {
        result += arr[i]
    }
}
console.log(result)