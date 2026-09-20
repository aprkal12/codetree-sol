const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

// Please Write your code here.
let arr = [...a.sort((a, b) => a - b)];
let max = 0;

const f = (arr, i) => {
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (arr[j] >= i) {
            count++
        }
    }
    return count;
}

for (let i = 0; i <= n; i++) {
    let count = 0;
    if (l < 1) {
        count = f(arr, i);
    } else {
        count = f(arr, i)
        let lcount = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] === i - 1 && lcount < l) {
                count++;
                lcount++;
            }
        }
    }
    if (count >= i) {
        max = Math.max(max, i);
    }
}
console.log(max)