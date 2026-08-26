const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

// Please Write your code here.
let max = Number.MIN_SAFE_INTEGER;
let arr = [...people].sort((a, b) => a.pos - b.pos);
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        let result = [];
        let gcount = 0;
        let hcount = 0;
        for (let k = i; k < j + 1; k++) {
            result.push(arr[k].letter);
            if (arr[k].letter === 'G') {
                gcount++;
            } else {
                hcount++;
            }
        }
        if ((result.includes('H') && !result.includes('G')) || (!result.includes('H') && result.includes('G')) || gcount === hcount){
            max = Math.max(max, arr[j].pos-arr[i].pos);
        }
    }
}
console.log(max)
