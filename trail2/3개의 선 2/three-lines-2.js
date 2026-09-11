const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const candidates = [];
for (let v = 0; v <= 10; v++) candidates.push({ type: 'x', value: v });
for (let v = 0; v <= 10; v++) candidates.push({ type: 'y', value: v });
const f = () => {
    for (let a = 0; a < candidates.length; a++) {
        for (let b = a; b < candidates.length; b++) {
            for (let c = b; c < candidates.length; c++) {
                const chosen = [candidates[a], candidates[b], candidates[c]];
                let check = false;
                for (const p of points) {
                    const [x, y] = p;
                    check = false;
                    for (const cho of chosen) {
                        if (cho.type === 'x') {
                            if (x === cho.value) {
                                check = true;
                                break;
                            }
                        } else {
                            if (y === cho.value) {
                                check = true;
                                break;
                            }
                        }
                    }
                    if (!check) {
                        break;
                    }
                }
                if (check) {
                    return 1;
                }
            }
        }
    }
    return 0;
}
console.log(f())

