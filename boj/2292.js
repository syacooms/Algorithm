// 벌집
// https://www.acmicpc.net/problem/2292

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

// 1-7   6 1
// 8-19  12 3
// 20-37  18 4
// 38-70   24 5

let range = 1;
let count = 1;

while (range < input[0]) {
  range += count++ * 6;
}

console.log(count);
