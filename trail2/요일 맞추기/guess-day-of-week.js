const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

let result = ""
let day1 = 0;
let day2 = 0;

// 각 월별 일수 배열
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const strDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const m = m1 > m2 ? m1 : m2;

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
let idx = (7 + 1 - (day1 - day2) % 7) % 7;
result = strDays[idx]
console.log(result)