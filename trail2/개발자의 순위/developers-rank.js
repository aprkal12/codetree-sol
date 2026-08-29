const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let count = 0;
const result = new Map();
for (let l = 0; l < k; l++) {
    for (let i = 0; i < n; i++) {
        const midresult = new Map();
        for (let j = i + 1; j < n; j++) {
            if (!midresult.has(arr[l][j])) {
                midresult.set(arr[l][j], 0);
            }
            midresult.set(arr[l][j], midresult.get(arr[l][j]) + 1);
        }
        for(const mid of midresult){
            const [key, v] = mid;
            if (!result.has(arr[l][i])) {
                result.set(arr[l][i], []);
            }
            result.get(arr[l][i]).push(key);
        }
    }
}
for(const re of result){
    const [key, v] = re;
    const tmpresult = new Map();
    for(const val of v){
        if(!tmpresult.has(val)){
            tmpresult.set(val, 0)
        }
        tmpresult.set(val, tmpresult.get(val) + 1);
    }
    for(const tmp of tmpresult){
        const [key, v] = tmp;
        if(v === k){
            count++;
        }
    }
}
console.log(count);
