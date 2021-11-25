// 한 수
// https://www.acmicpc.net/problem/1065

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let N = input;
let count = 0;
for (let i = 1; i <= N; i++) {
  if (Number(i) < 100) count++;
  if (Number(i) > 100) {
    let num = '';
    num = i;

    if (
      Number(num.toString().slice(0, 1)) - Number(num.toString().slice(1, 2)) ==
      Number(num.toString().slice(1, 2)) - Number(num.toString().slice(2, 3))
    )
      count++;
  }
}

console.log(count);
