const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
let result = 0;
let m = m1;
if (m1 === m2) {
    result = d2 - d1 + 1;
} else {
    while (m < m2) {
        let maxd = 0
        if (m === 2) {
            maxd = 28
        }
        else if (m < 8) {
            if (m % 2 !== 0) {
                maxd = 31
            } else {
                maxd = 30
            }
        } else {
            if (m % 2 !== 0) {
                maxd = 30
            } else {
                maxd = 31
            }
        }
        if (m1 === m) {
            result = maxd - d1 + 1;
        } else {
            result += maxd;
        }
        m++;
    }
    result += d2;
}
console.log(result);