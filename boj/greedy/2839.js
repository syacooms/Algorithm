// 설탕 배달
// https://www.acmicpc.net/problem/2839

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let sugar = input[0];
let count = 0;

const solution = (sugar) => {
  while (true) {
    if (sugar % 5 === 0) {
      console.log(sugar / 5 + count);
      break;
    } else if (sugar <= 0) {
      console.log(-1);
      break;
    }
    sugar = sugar - 3;
    count++;
  }
};

solution(sugar);
