const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 
const arr = new Array(10).fill(0)

let n = 0;
let i = 0;
let j = 0;
let result = '';
while (binaryInput.length > i) {
    n = n * 2 + Number(binaryInput[i++])
}
n *= 17
while (n >= 1) {
    arr[j++] = n % 2;
    n = Math.floor(n / 2);
}
for (j = j - 1; j >= 0; j--) {
    result += arr[j];
}
console.log(result)
