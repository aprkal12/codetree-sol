const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.
let result = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let same = new Set();
    let w = [];
    let count = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n - i; j++) {
        w.push(string.slice(j, j + i + 1));
    }
    for (const word of w) {
        same.add(word);
    }
    if (same.size === n - i) {
        count = i + 1;
    }
    result = Math.min(result, count)
}
console.log(result)