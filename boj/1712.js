// 손익분기점
// https://www.acmicpc.net/problem/1712

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let solution = 0;

solution = Math.floor(a / (c - b)) + 1;

if (b >= c) {
  solution = -1;
}

console.log(solution);
