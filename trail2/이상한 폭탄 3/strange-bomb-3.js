const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

// Please write your code here.
let result = 0;
let big = 0;
let max = 0;
for (let i = 0; i < n; i++) {
    let idx = -1;
    let check = Array(n).fill(false);
    for (let j = 0; j < n; j++) {
        if (nums[i] === nums[j]) {
            if (idx >= 0 && idx !== j && Math.abs(idx - j) <= k) {
                check[idx] = true;
                check[j] = true;
            }
            idx = j;
        }
    }
    let count = 0;
    for (const c of check) {
        if (c) {
            count++;
        }
    }
    if (max === count && count > 0) {
        result = Math.max(result, nums[i]);
    } else if (count > max) {
        max = count;
        result = nums[i];
    }
}
console.log(result)