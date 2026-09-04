const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tb.push(tbValue);
}
// Please Write your code here.
let tamin = Number.MAX_SAFE_INTEGER;
let tbmax = 0;
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    tamin = Math.min(tamin, ta[i]);
    tbmax = Math.max(tbmax, tb[i]);
}
for (let i = tamin - 1; i < tbmax + 2; i++) {
    let work = 0;
    for (let j = 0; j < n; j++) {
        if (i < ta[j]) {
            work += c;
        } else if (i >= ta[j] && i <= tb[j]) {
            work += g;
        } else {
            work += h;
        }
    }
    max = Math.max(max, work);
}
console.log(max)