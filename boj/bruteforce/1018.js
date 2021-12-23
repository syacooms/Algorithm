// 체스판 다시 칠하기
// https://www.acmicpc.net/problem/1018

// 너무 못풀겟어서 답지 봣음.. ㅠㅠ

// /dev/stdin
let fs = require('fs');
let [NM, ...BOARD] = fs.readFileSync('예제.txt').toString().trim().split('\n');

NM = NM.split(' ');
let N = Number(NM[0]);
let M = Number(NM[1]);

const solution = (n, m, board) => {
  let bw = ['WBWBWBWB', 'BWBWBWBW'];
  let min = 64;
  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      for (let oe = 0; oe < 2; oe++) {
        let count = 0;
        for (let x = i; x < i + 8; x++) {
          for (let y = j; y < j + 8; y++) {
            if (board[x][y] !== bw[(x + oe) % 2][y - j]) {
              count++;
            }
          }
        }
        if (min > count) min = count;
      }
    }
  }

  return console.log(min);
};

solution(N, M, BOARD);
