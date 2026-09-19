const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let result = 0;
let max = a.reduce((sum, x) => sum + x, 0);
for (let i = 1; i <= max; i++) {
    let count = 1;
    let sum = 0;
    let flag = true;
    for (let j = 0; j < n; j++) {
        if (a[j] > i) {
            flag = false;
            break;
        }
        if ((sum + a[j]) <= i) {
            sum += a[j];
        } else {
            count++;
            sum = a[j];
        }
        if (count > m) {
            flag = false;
            break;
        }
    }
    if (flag) {
        result = i;
        break;
    }
}
console.log(result)