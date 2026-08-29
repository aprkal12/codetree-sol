const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let max = -1;
for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        if(i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k){
            max = Math.max(max, nums[i]);
        }
    }
}
console.log(max)