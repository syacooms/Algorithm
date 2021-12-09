// 음계
// https://www.acmicpc.net/problem/2920

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let arr = [];
let ascending = ['1', '2', '3', '4', '5', '6', '7', '8'];
let descending = ['8', '7', '6', '5', '4', '3', '2', '1'];

for (state of input) arr.push(state);

const solution = (cur) => {
  if (JSON.stringify(cur) === JSON.stringify(ascending))
    return console.log('ascending');
  else if (JSON.stringify(cur) === JSON.stringify(descending))
    return console.log('descending');
  else return console.log('mixed');
};

solution(arr);
