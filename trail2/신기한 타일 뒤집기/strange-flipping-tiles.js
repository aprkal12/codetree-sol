const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const plate = {}
let pt = 0;
const result = [0, 0];

for (const command of commands) {
    const [x, dir] = command.split(' ');
    let i = pt;
    if (dir === 'R') {
        for (; i < pt + Number(x); i++) {
            plate[i] = 'b'
        }
        i -= 1;
    } else {
        for (; i > pt - Number(x); i--) {
            plate[i] = 'w'
        }
        i += 1;
    }
    pt = i;
}
for (const p of Object.values(plate)) {
    if (p === 'w') {
        result[0] += 1;
    } else {
        result[1] += 1;
    }
}
console.log(...result)