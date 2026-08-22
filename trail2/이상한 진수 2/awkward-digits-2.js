const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
const binary = a.split('').map(Number);
const length = binary.length;
let ans = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < length; i++) {
    binary[i] = 1 - binary[i];

    let num = 0;
    for (let j = 0; j < length; j++) {
        num = num * 2 + binary[j];
    }

    ans = Math.max(ans, num);

    binary[i] = 1 - binary[i];
}
console.log(ans);