const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
let result = 0;
if ((A * 24 * 60 + B * 60 + C) < (11 * 60 * 24 + 11 * 60 + 11)) {
    result = -1;
} else if (A === 11) {
    result = (B * 60 + C) - (11 * 60 + 11)
} else {
    result = (A * 24 * 60 + B * 60 + C) - (11 * 60 * 24 + 11 * 60 + 11)
}
console.log(result)