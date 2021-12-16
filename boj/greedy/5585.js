// 거스름돈
// https://www.acmicpc.net/problem/5585

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

const solution = (coin) => {
  let arr = ['500', '100', '50', '10', '5', '1'];
  let cnt = 0;

  // 계산
  for (val of arr) {
    if (coin >= val) {
      cnt += Math.floor(coin / val);
      coin = Math.floor(coin % val);
    }
  }

  return console.log(cnt);
};

// 천원 한장 지불
input = 1000 - input;
solution(input);
