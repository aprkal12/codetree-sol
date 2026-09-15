const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

// Please Write your code here.
let pair = new Map();
for (let i = 0; i < m; i++) {
    let p = pairs[i].sort((a, b) => a - b);
    let curp = `${p[0]}, ${p[1]}`
    if (!pair.has(curp)) {
        pair.set(curp, 0);
    }
    pair.set(curp, pair.get(curp) + 1)
}
console.log(Math.max(...pair.values()))