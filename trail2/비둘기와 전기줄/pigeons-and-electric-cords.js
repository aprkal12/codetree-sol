const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let map = new Map();
let result = 0;

for (const m of movements) {
    const [p, x] = m;
    if (map.has(p) && map.get(p) !== x) {
        result++;
    }
    map.set(p, x);
}
console.log(result);