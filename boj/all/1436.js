// 영화감독 숌
// https://www.acmicpc.net/problem/1436

// /dev/stdin
let fs = require('fs');
let N = fs.readFileSync('예제.txt').toString().trim().split(' ');

N = parseInt(N);

const solution = (n) => {
  let result = 1;
  let num = 666;

  while (result !== n) {
    num++;
    if (String(num).includes('666')) result++;
  }

  return num;
};

console.log(solution(N));
