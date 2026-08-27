const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let max = Number.MIN_SAFE_INTEGER;
let arr = [];
for (const seg of segments) {
    const [n1, n2] = seg;
    for (let i = n1; i < n2; i++) {
        arr[i] = (arr[i] ?? 0) + 1;
    }
}
for (let i = 0; i < n; i++) {
    let tmin = Number.MAX_SAFE_INTEGER;
    let tmax = Number.MIN_SAFE_INTEGER;
    let time = 0;
    const [n1, n2] = segments[i];
    for (let j = 0; j < n; j++) {
        const [n3, n4] = segments[j];
        if (i !== j) {
            tmax = Math.max(tmax, n4);
            tmin = Math.min(tmin, n3);
        }
    }
    for (let k = n1; k < n2; k++) {
        arr[k]--;
    }
    for (let j = tmin; j < tmax; j++) {
        time += arr[j] > 0 ? 1 : 0;
    }
    for (let k = n1; k < n2; k++) {
        arr[k]++;
    }
    max = Math.max(max, time);
}
console.log(max)