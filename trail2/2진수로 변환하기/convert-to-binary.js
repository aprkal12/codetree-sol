const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const result = new Array(12).fill(0);
let num = n;
let i = 0;
let resultstr = '';
if (num === 0) {
    resultstr = '0';
} else {
    while (num >= 1) {
        result[i++] = Math.floor(num % 2);
        num /= 2;
    }
    for (i = i - 1; i >= 0; i--) {
        resultstr += result[i]
    }
}
console.log(resultstr)
