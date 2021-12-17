// 로프
// https://www.acmicpc.net/problem/2217

// /dev/stdin
let fs = require('fs');
let [N, ...list] = fs.readFileSync('예제.txt').toString().trim().split('\n');

list = list.map((el) => +el);
list.sort((a, b) => a - b);

const solution = (list, N) => {
  let min = list[0] * N;

  for (let i = 1; i < N; i++) {
    if (min < list[i] * (N - i)) min = list[i] * (N - i);
  }

  return console.log(min);
};

solution(list, N);
