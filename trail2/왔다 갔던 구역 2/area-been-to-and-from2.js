const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const arr = new Array(2000).fill(0)
let pt = 1000;
let result = 0;
for (const com of commands) {
    const [x, dir] = com.split(' ');
    let j = pt;
    if (dir === "R") {
        for (; j < pt + Number(x); j++) {
            arr[j] += 1;
        }
    } else {
        for (j = pt - 1; j >= pt - Number(x); j--) {
            arr[j] += 1;
        }
        j += 1
    }
    pt = j;
}
for (let k = 0; k < arr.length; k++) {
    if (arr[k] > 1) {
        result += 1;
    }
}
console.log(result)