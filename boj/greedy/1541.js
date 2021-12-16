// 잃어버린 괄호
// https://www.acmicpc.net/problem/1541

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('-');

const solution = (list) => {
  let tmp = [];

  for (val of list) {
    let cnt = 0;
    let s = val.split('+');
    for (j of s) {
      cnt += Number(j);
    }
    tmp.push(cnt);
  }
  let result = tmp[0];
  for (let i = 1; i < tmp.length; i++) {
    result -= tmp[i];
  }
  console.log(result);
};

solution(input);
