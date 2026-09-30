const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

// Please write your code here.
let result = 0;
for (let T = 1; ; T++) {
    let k, max;
    if (T % 2 === 1) {
        k = (T + 1) / 2;
        max = k * k;
    } else {
        k = T / 2;
        max = k * (k + 1);
    }
    if (max >= x) {
        result = T;
        break;
    }
}
console.log(result);
