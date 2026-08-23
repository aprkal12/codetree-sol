const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let result = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        let count = 0;
        for (let k = 0; k < 3; k++) {
            count += grid[i][j + k] > 0 ? 1 : 0;
        }
        let midcount = 0;
        for (let k = 0; k < n; k++) {
            if (i === k) {
                for (let l = j + 3; l < n - 2; l++) {
                    for (let m = 0; m < 3; m++) {
                        midcount += grid[k][l + m] > 0 ? 1 : 0;
                    }
                    result = Math.max(result, count + midcount)
                    midcount = 0;
                }

            }
            if (i < k) {
                for (let l = 0; l < n - 2; l++) {
                    for (let m = 0; m < 3; m++) {
                        midcount += grid[k][l + m] > 0 ? 1 : 0;
                    }
                    result = Math.max(result, count + midcount)
                    midcount = 0;
                }
            }
        }
    }
}
console.log(result);