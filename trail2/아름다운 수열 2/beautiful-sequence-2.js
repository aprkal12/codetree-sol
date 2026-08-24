const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.
let check = [];
let result = 0;
for (let i = 0; i < n - m + 1; i++) {
    let count = 0;
    let tmp = [...arr2];
    let flag = [];
    for (let j = i; j < i + m; j++) {
        for (let k = 0; k < m; k++) {
            if (arr1[j] === tmp[k]) {
                flag.push(true);
                tmp[k] = false;
                break
            }
        }
    }
    if (flag.length === m) {
        result++;
    }
}
console.log(result)