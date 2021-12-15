// 회의실 배정
// https://www.acmicpc.net/problem/1931

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let N = input[0].toString().trim().split(' ');
input = input.slice(1);

let list = [];
for (el of input) {
  list.push(el.split(' ').map((el) => Number(el)));
}

const solution = (list, n) => {
  list.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let count = 1;
  let tmp = list[0][1];

  for (let i = 1; i < n; i++) {
    if (tmp <= list[i][0]) {
      tmp = list[i][1];
      count++;
    }
  }

  return count;
};

console.log(solution(list, N));
