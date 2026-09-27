const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

// Please Write your code here.
let result = 0;
for (let i = 0; i < n - 1; i++) {
    let am = 0;
    if (a[i] > b[i]) {
        am = a[i] - b[i];
        a[i + 1] += am;
        result += am;
    }
}
console.log(result);