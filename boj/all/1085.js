// 직사각형에서 탈출
// https://www.acmicpc.net/problem/1085

// /dev/stdin
let fs = require('fs');
let [X, Y, W, H] = fs.readFileSync('예제.txt').toString().trim().split(' ');

X = Number(X);
Y = Number(Y);
W = Number(W);
H = Number(H);

const solution = (X, Y, W, H) => {
  let lines = [];
  lines.push(X);
  lines.push(Y);
  lines.push(H - Y);
  lines.push(W - X);

  lines.sort((a, b) => a - b);

  return console.log(lines[0]);
};

solution(X, Y, W, H);
