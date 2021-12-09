// 상수
// https://www.acmicpc.net/problem/2908

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let number = '';
let result = 0;
let max = 0;

for (let i = 0; i < Number(input.length); i++) {
  for (let j = input[i].length - 1; j >= 0; j--) {
    number += input[i][j];
  }
  result = Number(number);
  number = '';
  if (result > max) max = result;
}

console.log(max);
