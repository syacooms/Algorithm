// 동전 0
// https://www.acmicpc.net/problem/11047

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let [N, K] = input[0].toString().trim().split(' ');
let coins = [];
for (var i = 1; i < input.length; i++) {
  coins.push(input[i]);
}
coins.sort((a, b) => b - a);

const solution = (K, N, coins) => {
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (K >= Number(coins[i])) {
      result += Math.floor(K / coins[i]);
      K = K % coins[i];
      if (K == 0) return result;
    }
  }
};

console.log(solution(K, N, coins));
