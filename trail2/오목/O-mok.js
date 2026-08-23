const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// Please Write your code here.
let winner = [0, 0];
let winnerColor = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] > 0) {
            let [d, r, s, ld] = [true, true, true, true];
            let target = arr[i][j]
            for (let k = 1; k < 5; k++) {
                d = i < arr.length - 4 && arr[i + k][j] === target && d ? true : false;
                r = j < arr[0].length - 4 && arr[i][j + k] === target && r ? true : false;
                s = i < arr.length - 4 && j < arr[0].length - 4 && arr[i + k][j + k] === target && s ? true : false;
                ld = i < arr.length - 4 && j > 3 && arr[i + k][j - k] === target && ld ? true : false;
            }
            if (d) {
                winner = [i + 3, j + 1];
                winnerColor = arr[i][j];
            } else if (r) {
                winner = [i + 1, j + 3];
                winnerColor = arr[i][j];
            } else if (s) {
                winner = [i + 3, j + 3];
                winnerColor = arr[i][j];
            } else if (ld) {
                winner = [i + 3, j - 1];
                winnerColor = arr[i][j];
            }
        }
    }
}
if (winnerColor > 0) {
    console.log(winnerColor)
    console.log(...winner)
} else {
    console.log(winnerColor)
}
