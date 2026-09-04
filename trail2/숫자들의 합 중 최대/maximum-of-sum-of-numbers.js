const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.

let max = Number.MIN_SAFE_INTEGER;

for(let i = x; i<=y; i++){
    let str = i.toString();
    let tmp = 0;
    for(let j = 0; j<str.length; j++){
        tmp += Number(str[j]);
    }
    max = Math.max(max, tmp);
}
console.log(max)