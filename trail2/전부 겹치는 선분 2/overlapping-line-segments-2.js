const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}

// Please Write your code here.
let min = 101;
let max = -1;
let arr = [];
let result = 'No';
for (let i = 0; i < n; i++) {
    min = Math.min(...x1List);
    max = Math.max(...x2List);
    const [x1, x2] = [x1List[i], x2List[i]];
    for (let j = x1; j <= x2; j++) {
        arr[j] = (arr[j] ?? 0) + 1;
    }
}
for (let i = min; i <= max; i++) {
    if (arr[i] === n - 1 || arr[i] === n) {
        result = 'Yes';
        break;
    }
}
console.log(result)