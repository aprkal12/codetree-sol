const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// Please Write your code here.
let sortedArr = [...arr].sort((a, b) => a - b);
let result = []
for(let i = 0; i<3; i++){
    result.push(sortedArr[i] + sortedArr[6-i-1]);
}

console.log(Math.max(...result) - Math.min(...result))