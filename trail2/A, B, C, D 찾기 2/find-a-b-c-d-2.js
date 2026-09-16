const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);
// Please Write your code here.

let result = [];
let min = Math.min(...numbers);
let max = Math.max(...numbers);
for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
        for (let k = j; k <= max; k++) {
            for (let l = k; l <= max; l++) {
                let check = Array(15).fill(false);
                let number = Array(15).fill(false);
                for (let m = 0; m < 15; m++) {
                    if (numbers[m] === i && !number[m] && !check[0]) {
                        check[0] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === j && !number[m] && !check[1]) {
                        check[1] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === k && !number[m] && !check[2]) {
                        check[2] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === l && !number[m] && !check[3]) {
                        check[3] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + j && !number[m] && !check[4]) {
                        check[4] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === j + k && !number[m] && !check[5]) {
                        check[5] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === k + l && !number[m] && !check[6]) {
                        check[6] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === l + i && !number[m] && !check[7]) {
                        check[7] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + k && !number[m] && !check[8]) {
                        check[8] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === j + l && !number[m] && !check[9]) {
                        check[9] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + j + k && !number[m] && !check[10]) {
                        check[10] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + j + l && !number[m] && !check[11]) {
                        check[11] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + k + l && !number[m] && !check[12]) {
                        check[12] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === j + k + l && !number[m] && !check[13]) {
                        check[13] = true;
                        number[m] = true;
                    }
                    if (numbers[m] === i + j + k + l && !number[m] && !check[14]) {
                        check[14] = true;
                        number[m] = true;
                    }
                }
                if (!check.includes(false)) {
                    result = [i, j, k, l]
                }
            }
        }
    }
}
console.log(...result)