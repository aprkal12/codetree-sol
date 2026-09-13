const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const board = input.slice(0, 3).map(line => line.split('').map(Number));
// Please write your code here.
let carr = new Map();
let rcarr = new Map();
let winners = new Set();
for (let i = 0; i < 3; i++) {
    let xarr = new Map();
    let yarr = new Map();
    for (let j = 0; j < 3; j++) {
        let x = board[i][j];
        let y = board[j][i];
        xarr.has(x) ? xarr.set(x, xarr.get(x) + 1) : xarr.set(x, 1);
        yarr.has(y) ? yarr.set(y, yarr.get(y) + 1) : yarr.set(y, 1);
    }
    const [a, b] = [...xarr.keys()].sort((x, y) => x - y);
    const [c, d] = [...yarr.keys()].sort((x, y) => x - y);
    if (xarr.size === 2 && !winners.has(`${a}, ${b}`)) {
        winners.add(`${a}, ${b}`);
    }
    if (yarr.size === 2 && !winners.has(`${c}, ${d}`)) {
        winners.add(`${c}, ${d}`);
    }
    let x1 = board[i][i];
    let x2 = board[i][3 - i - 1];
    carr.has(x1) ? carr.set(x1, carr.get(x1) + 1) : carr.set(x1, 1);
    rcarr.has(x2) ? rcarr.set(x2, rcarr.get(x2) + 1) : rcarr.set(x2, 1);
}
const [a, b] = [...carr.keys()].sort((x, y) => x - y);
const [c, d] = [...rcarr.keys()].sort((x, y) => x - y);
if (carr.size === 2 && !winners.has(`${a}, ${b}`)) {
    winners.add(`${a}, ${b}`);
}
if (rcarr.size === 2 && !winners.has(`${c}, ${d}`)) {
    winners.add(`${c}, ${d}`);
}
console.log(winners.size)

