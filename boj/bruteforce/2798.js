// 블랙잭
// https://www.acmicpc.net/problem/2798

// /dev/stdin
let fs = require('fs');
let [NM, ...cards] = fs.readFileSync('예제.txt').toString().trim().split('\n');

NM = NM.split(' ').map((el) => parseInt(el));
const N = NM.shift();
const M = NM.shift();
cards = cards[0].split(' ').map((el) => +parseInt(el));

const solution = (n, m, cards) => {
  let max = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum > max && sum <= m) {
          max = sum;
        }
      }
    }
  }

  return console.log(max);
};

solution(N, M, cards);
