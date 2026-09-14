const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
let result = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] !== '1') {
        let str = [...seat];
        str[i] = '1';
        let min = n + 1;
        let near = -1;
        for (let j = 0; j < n; j++) {
            if (str[j] === '1') {
                if (near !== -1) {
                    let dist = Math.abs(near - j);
                    min = Math.min(min, dist);
                }
                near = j;
            }
        }
        result = Math.max(min, result);
    }
}
console.log(result);