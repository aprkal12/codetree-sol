const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.
let count = 0;
let startColor = grid[0][0];
let nextColor = startColor;
let cur = [[0, 0]]
for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
        if (grid[i][j] !== startColor) {
            nextColor = grid[i][j];
            for (let k = i + 1; k < R - 1; k++) {
                for (let l = j + 1; l < C - 1; l++) {
                    if (grid[k][l] !== nextColor && grid[k][l] !== grid[R - 1][C - 1]) {
                        count++;
                    }
                }
            }
        }
    }
}
console.log(count)