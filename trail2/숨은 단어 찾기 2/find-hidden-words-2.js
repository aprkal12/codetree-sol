const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);
// Please Write your code here.
let result = []
let count = 0;
let rmax = m - 2;
let dmax = n - 2;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr[i][j] === 'L') {
            let dir = Array(8).fill(true); // l, r, d, u, lu, ru, ld, rd
            for (let k = 1; k < 3; k++) {
                dir[0] = j > 1 && arr[i][j - k] === 'E' && dir[0];
                dir[1] = j < rmax && arr[i][j + k] === 'E' && dir[1];
                dir[2] = i < dmax && arr[i + k][j] === 'E' && dir[2];
                dir[3] = i > 1 && arr[i - k][j] == 'E' && dir[3];
                dir[4] = i > 1 && j > 1 && arr[i - k][j - k] === 'E' && dir[4];
                dir[5] = i > 1 && j < rmax && arr[i - k][j + k] === 'E' && dir[5];
                dir[6] = i < dmax && j > 1 && arr[i + k][j - k] === 'E' && dir[6];
                dir[7] = i < dmax && j < rmax && arr[i + k][j + k] === 'E' && dir[7];
            }
            result = dir.filter(d => d === true);
            count += result.length
        }
    }
}
console.log(count)