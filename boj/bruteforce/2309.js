// 일곱난장이
// https://www.acmicpc.net/problem/2309

// /dev/stdin
let fs = require('fs');
let N = fs.readFileSync('예제.txt').toString().trim().split('\n');

let list = [];

for (val of N) {
  list.push(val.split(' ').map((el) => Number(el)));
}
let result;

const solution = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (
        list.reduce((acc, cur) => acc + Number(cur), 0) ===
        Number(list[i]) + Number(list[j]) + 100
      ) {
        result = list.filter((el) => el !== list[i] && el !== list[j]);
        break;
      }
    }
  }
  result.sort((a, b) => a - b);
  return console.log(result.map((el) => el).join('\n'));
};

solution(list);
