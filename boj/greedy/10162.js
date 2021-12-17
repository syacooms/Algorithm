// 전자레인지
// https://www.acmicpc.net/problem/10162

// /dev/stdin
let fs = require('fs');
let N = fs.readFileSync('예제.txt').toString().trim().split(' ');

const solution = (N) => {
  let T = ['300', '60', '10'];
  let min = 0;
  let result = '';

  for (let i = 0; i < T.length; i++) {
    if (N >= parseInt(T[i])) {
      min = Math.floor(N / T[i]);
      N = Math.floor(N % T[i]);
      result += min + ' ';
    } else {
      result += 0 + ' ';
    }
  }

  if (N !== 0) return console.log(-1);

  return console.log(result);
};

solution(N);
