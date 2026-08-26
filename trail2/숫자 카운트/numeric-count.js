const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please write your code here.
let answer = 0;
function calcNum(target) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        let [s, b] = [0, 0];
        for (let j = 0; j < 3; j++) {
            let snum = String(arr[i][0])
            if (snum[j] === String(target[j])) {
                s++;
            } else if (String(target).includes(snum[j])) {
                b++;
            }
        }
        if (s === arr[i][1] && b === arr[i][2]) {
            result = 1;
        } else {
            result = 0;
            break;
        }
    }
    return result;
}
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        for (let k = 1; k < 10; k++) {
            if (i !== j && j !== k && k !== i) {
                answer += calcNum(String(i) + String(j) + String(k));
            }
        }
    }
}
console.log(answer)