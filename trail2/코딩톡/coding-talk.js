const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, p] = input[0].split(' ').map(Number);
const messages = input.slice(1, 1 + m).map(line => line.split(' '));

// Please Write your code here.
let check = new Map();
let result = [];
let nc = messages[p - 1][1]
for (let i = 0; i < n; i++) {
    check.set(String.fromCharCode(i + 65), false);
}
if (nc > 0) {
    for (let i = 0; i < m; i++) {
        const [per, c] = messages[i];
        if (c === nc) {
            check.set(per, true);
        }
    }
    for (let i = p - 1; i < m; i++) {
        const [per, c] = messages[i];
        check.set(per, true);
    }
    for (let i = 0; i < check.size; i++) {
        let al = String.fromCharCode(i + 65)
        if (!check.get(al)) {
            result.push(al)
        }
    }
}
console.log(...result)