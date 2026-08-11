const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

const time1h = c * 60
const time1m = d
const time2h = a * 60
const time2m = b

console.log((time1h+time1m) - (time2h+time2m))