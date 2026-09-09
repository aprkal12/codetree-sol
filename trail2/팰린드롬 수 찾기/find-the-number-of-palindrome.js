const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.
let count = 0;
for(let i = x; i<=y; i++){
    let n = i.toString();
    let flag = true;
    for(let j = 0; j<n.length / 2; j++){
        if(n[j] !== n[n.length-j-1]){
            flag = false;
        }
    }
    if(flag){
        count++;
    }
}
console.log(count)