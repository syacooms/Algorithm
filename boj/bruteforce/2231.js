// 분해합
// https://www.acmicpc.net/problem/2231

// /dev/stdin
let fs = require('fs');
let N = fs.readFileSync('예제.txt').toString().trim().split(' ');

N = N[0].split(' ').map((el) => parseInt(el));
let result = [];

const calc = (n) => {
  const N = n.toString().split('');

  return n + N.reduce((acc, cur) => (acc += Number(cur)), 0);
};

const solution = (N) => {
  for (let i = 0; i <= N; i++) {
    if (calc(i) == N) {
      result.push(i);
    }
  }

  if (result.length > 0) {
    return console.log(Math.min.apply(null, result));
  } else {
    return console.log(0);
  }
};

solution(N);
