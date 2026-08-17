const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
const arr = new Array(200000).fill(0)
let pt = 100000
let minx = 100000
let maxx = 100000
const result = [0, 0, 0];
const black = {}
const white = {}
for (const com of commands) {
    const [x, dir] = com
    let i = pt
    if (dir === "R") {
        for (; i < pt + Number(x); i++) {
            if (arr[i] < 0) {
                arr[i] += Math.abs(arr[i] * 2)
            } else {
                arr[i] += 1
            }
            if (!black[i]) {
                black[i] = 1
            } else {
                black[i] += 1
            }
        }
        i -= 1
    } else {
        for (; i > pt - Number(x); i--) {
            if (arr[i] > 0) {
                arr[i] -= arr[i] * 2
            } else {
                arr[i] -= 1
            }
            if (!white[i]) {
                white[i] = 1
            } else {
                white[i] += 1
            }
        }
        i += 1
    }
    pt = i
    if (pt > maxx) {
        maxx = pt
    }
    if (pt < minx) {
        minx = pt
    }
}
for (let j = minx; j <= maxx; j++) {
    if (black[j] > 1 && white[j] > 1) {
        result[2] += 1
    } else if (arr[j] > 0) {
        result[1] += 1
    } else if (arr[j] < 0) {
        result[0] += 1
    }
}
console.log(...result)