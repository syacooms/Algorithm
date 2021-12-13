// ATM
// https://www.acmicpc.net/problem/11399

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const N = input[0];
const arr = input[1]
  .split(' ')
  .map((item) => +item)
  .sort((a, b) => a - b);
let result = 0;
let before = 0;
let items = [];

const solution = (arr) => {
  for (let i = 0; i < N; i++) {
    result = before + arr[i];
    before += arr[i];
    items.push(result);
  }

  return items.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(solution(arr));
