const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n);

// Please Write your code here.
let result = -1;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            let tmplen = arr[i].length > arr[j].length ? arr[i].length : arr[j].length;
            let len = tmplen > arr[k].length ? tmplen : arr[k].length
            let isTarget = false;
            for (let l = 0; l < len; l++) {
                if (Number(arr[i][arr[i].length - l - 1] ?? 0) + Number(arr[j][arr[j].length - l - 1] ?? 0) + Number(arr[k][arr[k].length - l - 1] ?? 0) < 10) {
                    isTarget = true;
                } else {
                    isTarget = false;
                    break;
                }
            }
            if (isTarget) {
                result = Math.max(result, Number(arr[i]) + Number(arr[j]) + Number(arr[k]));
            }
        }
    }
}
console.log(result)
