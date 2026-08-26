const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.
let arr = abilities
let min = Number.MAX_SAFE_INTEGER;
let setmin = min;
function diff(i, j, k, l){
    let sum1 = arr[i]+arr[j];
    let sum2 = arr[k]+arr[l];
    let sum3 = arr.reduce((acc, el)=> acc+el,0) - (sum1 + sum2);

    if(sum1 === sum2 || sum2 === sum3 || sum3 === sum1){
        return Number.MAX_SAFE_INTEGER;
    }
    let ret = Math.abs(sum1-sum2);
    ret = Math.max(ret, Math.abs(sum2 - sum3));
    ret = Math.max(ret, Math.abs(sum3 - sum1));
    return ret;
}
for(let i = 0; i < 5; i++){
    for(let j = i+1; j<5; j++){
        for(let k = 0; k<5; k++){
            for(let l = k+1; l<5; l++){
                if(i !== k && j !== k && i !== l && j !== l){
                    min = Math.min(min, diff(i, j, k, l));
                }
            }
        }
    }
}
if(min === setmin){
    min = -1;
}
console.log(min)