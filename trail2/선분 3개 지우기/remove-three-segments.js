const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let count = 0;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            let segs = [];
            let maxx = Number.MIN_SAFE_INTEGER;
            for (let l = 0; l < n; l++) {
                if (l !== i && l !== j && l !== k) {
                    const [x1, x2] = segments[l];
                    maxx = Math.max(maxx, x2);
                    for (let l = x1; l <= x2; l++) {
                        segs[l] = (segs[l] ?? 0) + 1;
                    }
                }
            }
            let flag = true;
            for (let l = 0; l < maxx; l++) {
                if (segs[l] > 1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                count++;
            }
        }
    }
}
console.log(count)