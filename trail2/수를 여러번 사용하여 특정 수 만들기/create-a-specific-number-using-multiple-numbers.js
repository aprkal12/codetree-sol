const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
// Please Write your code here.

let maxc = Math.max(Math.floor(c / a), Math.floor(c / b));
let max = 0;
for (let i = 0; i <= maxc; i++) {
    for (let j = 0; j <= maxc; j++) {
        let num = a * i;
        num += b * j;
        if (num <= c) {
            max = Math.max(max, num);
        }
    }
}
console.log(max)