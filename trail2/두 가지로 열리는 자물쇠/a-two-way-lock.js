const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.
let count = 0;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            let n1 = Math.abs(a - i);
            let n2 = Math.abs(b - j);
            let n3 = Math.abs(c - k);
            let n4 = Math.abs(a2 - i);
            let n5 = Math.abs(b2 - j);
            let n6 = Math.abs(c2 - k);
            if (Math.min(n1, n - n1) <= 2 && Math.min(n2, n - n2) <= 2 && Math.min(n3, n - n3) <= 2) {
                count++;
            } else if (Math.min(n4, n - n4) <= 2 && Math.min(n5, n - n5) <= 2 && Math.min(n6, n - n6) <= 2) {
                count++;
            }
        }
    }
}
console.log(count)


