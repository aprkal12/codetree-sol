const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.
let result = 0;
for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === '(' && A[i + 1] === '(') {
        for (let j = i + 1; j < A.length - 1; j++) {
            if (A[j] === ')' && A[j + 1] === ')') {
                result++;
            }
        }
    }
}
console.log(result)