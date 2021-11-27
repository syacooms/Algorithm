// 단어의 개수
// https://www.acmicpc.net/problem/1152

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let count = 0;
let word = '';

if (input == '') {
  count = 0;
} else {
  for (word of input) {
    count++;
  }
}

console.log(count);
