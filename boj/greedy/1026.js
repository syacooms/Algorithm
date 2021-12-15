// 보물
// https://www.acmicpc.net/problem/1026

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let N = input[0].toString().trim().split(' ');
input = input.slice(1);

let list = [];

for (val of input) list.push(val.split(' ').map((el) => Number(el)));

const solution = (n, list) => {
  list[0].sort((a, b) => a - b);
  list[1].sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < N; i++) {
    result += list[0][i] * list[1][i];
  }

  return result;
};

console.log(solution(N, list));
