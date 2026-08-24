const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}

// Please Write your code here.
let basket = [];
let max = Number.MIN_SAFE_INTEGER;
let maxPosition = Number.MIN_SAFE_INTEGER;
for (const bask of baskets) {
    const [candy, position] = bask;
    basket[position] = (basket[position] ?? 0) + candy;
    maxPosition = Math.max(maxPosition, position)
}
for (let i = k; i < Math.max(k*2, maxPosition-k+1); i++) {
    let num = 0;
    for (let j = i-k; j < i+k+1; j++) {
        num += (basket[j] ?? 0);
    }
    max = Math.max(max, num);
}
console.log(max);