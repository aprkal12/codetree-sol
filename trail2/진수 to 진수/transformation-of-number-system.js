const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

const arr = new Array().fill(0)
let i = 0;
let j = 0;
let num = 0;
let result = '';
while (n.length > i) {
    num = num * a + Number(n[i++]);
}
while (num >= 1) {
    arr[j++] = num % b;
    num = Math.floor(num / b);
}
for (j = j - 1; j >= 0; j--) {
    result += arr[j];
}
console.log(result)