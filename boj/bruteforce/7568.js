// 덩치
// https://www.acmicpc.net/problem/7568

// /dev/stdin
let fs = require('fs');
let [N, ...K] = fs.readFileSync('예제.txt').toString().trim().split('\n');

let list = [];

for (val of K) {
  list.push(val.split(' ').map((el) => Number(el)));
}

const solution = (N, list) => {
  let result = [];

  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 0; j < N; j++) {
      if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) count += 1;
    }
    result.push(count);
  }

  return console.log(result.map((el) => el).join(' '));
};

solution(N, list);
