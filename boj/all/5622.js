// 다이얼
// https://www.acmicpc.net/problem/5622

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

const dialAlphabet = [
  { name: 'A', number: 2 },
  { name: 'B', number: 2 },
  { name: 'C', number: 2 },
  { name: 'D', number: 3 },
  { name: 'E', number: 3 },
  { name: 'F', number: 3 },
  { name: 'G', number: 4 },
  { name: 'H', number: 4 },
  { name: 'I', number: 4 },
  { name: 'J', number: 5 },
  { name: 'K', number: 5 },
  { name: 'L', number: 5 },
  { name: 'M', number: 6 },
  { name: 'N', number: 6 },
  { name: 'O', number: 6 },
  { name: 'P', number: 7 },
  { name: 'Q', number: 7 },
  { name: 'R', number: 7 },
  { name: 'S', number: 7 },
  { name: 'T', number: 8 },
  { name: 'U', number: 8 },
  { name: 'V', number: 8 },
  { name: 'W', number: 9 },
  { name: 'X', number: 9 },
  { name: 'Y', number: 9 },
  { name: 'Z', number: 9 },
];

let result = 0;

input[0].split('').forEach((el) => {
  let dial = dialAlphabet.find((alpha) => alpha.name === el);
  result += Number(dial.number) + 1;
});

console.log(result);
