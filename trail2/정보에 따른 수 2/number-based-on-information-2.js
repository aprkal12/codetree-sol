const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' '));
// Please Write your code here.
let count = 0;
for(let i = a; i<=b; i++){
    let smin = Number.MAX_SAFE_INTEGER;
    let nmin = Number.MAX_SAFE_INTEGER;
    for(const sn of snData){
        const [w, n] = sn;
        let num = Number(n);
        if(w === 'S'){
            smin = Math.min(smin, Math.abs(num - i));
        }else{
            nmin = Math.min(nmin, Math.abs(num-i));
        }
    }
    if(smin <= nmin){
        count++;
    }
}
console.log(count)
