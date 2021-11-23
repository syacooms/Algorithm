// 숫자의 개수
// https://www.acmicpc.net/problem/2577

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let result = Number(input[0]) * Number(input[1]) * Number(input[2]) + '';
let answer = '';
let count = 0;

for (let i = 0; i <= 9; i++) {
  count = 0;
  for (let j = 0; j < result.length; j++) {
    if (result[j] == i) count++;
  }
  answer += count + '\n';
}

console.log(answer);
