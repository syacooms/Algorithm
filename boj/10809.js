// 알파벳 찾기
// https://www.acmicpc.net/problem/10809

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let count = 0;

// count로 해당 배열의 숫자
input[0].split('').forEach((el) => {
  arr.forEach((alphabets) => {
    if (el == alphabets) arr[arr.indexOf(el)] = count;
  });
  count++;
});

// 숫자가 아닐 경우 -1로 치환
arr.forEach((el) => {
  if (isNaN(el)) arr[arr.indexOf(el)] = -1;
});

// 출력
const out = arr.join(' ');
console.log(out);
