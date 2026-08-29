const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, cheese, t] = input[i].split(' ').map(Number);
    info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push({ p, t });
}

// Please write your code here.
let sickc = new Map(); // 각 사람들이 먹은 치즈 종류
for (let j = 0; j < s; j++) {
    const { p, t } = info2[j];
    const candi = [];
    for (let i = 0; i < d; i++) {
        const { p: p2, cheese, t: t2 } = info1[i];
        if (t > t2 && p === p2) {
            if (!candi[cheese]) {
                candi[cheese] = 1;
            }
        }
    }
    sickc.set(j, candi)
}
let target = [] // 모순 검증된 상한 치즈 후보들
for (let i = 1; i < m + 1; i++) {
    let flag = false;
    for (const t of sickc) {
        const [c, v] = t;
        if (v[i] === 1) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    if(flag){
        target[i] = 1;
    }
}
let max = Number.MIN_SAFE_INTEGER; // 상한 치즈 후보들 중 가장 많이 먹은 수
for (let j = 0; j < target.length; j++) {
    let count = 0;
    let dup = [];
    for (let i = 0; i < d; i++) {
        const { p: p2, cheese } = info1[i];
        if (dup[p2] !== 1 && cheese === j && target[j] === 1) {
            dup[p2] = 1;
            count++;
        }
    }
    max = Math.max(max, count);
}
console.log(max)
