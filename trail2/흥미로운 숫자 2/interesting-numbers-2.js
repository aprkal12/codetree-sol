const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.
let count = 0;
for(let i = x; i<=y; i++){
    let ni = i.toString();
    let arr = {};
    for(let j = 0; j<ni.length; j++){
        arr[ni[j]] = (arr[ni[j]] ?? 0) + 1;
    }
    let results = [...Object.values(arr)];
    if(Object.keys(arr).length === 2 && results.includes(1)){
        count++;
    }
}
console.log(count)