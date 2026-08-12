const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

// 각 월별 일수 배열
const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = { "Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6 }

let day1 = 0;
let day2 = 0;
let m = m1 > m2 ? m1 : m2;
for (let i = 1; i < m; i++) {
    if (i < m1) {
        day1 += num_of_days[i];
    }
    if (i < m2) {
        day2 += num_of_days[i];
    }
}
day1 += d1;
day2 += d2;
let target = day2 - day1;
const targetdaygap = (7 + 1 - (days[A])) % 7;
target += targetdaygap;
let result = Math.abs(Math.floor(target / 7))
if (A === "Mon") {
    result += 1
}
console.log(result)
