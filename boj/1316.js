// 그룹 단어 체커
// https://www.acmicpc.net/problem/1316

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let loop = input[0];

let map = new Map();
let count = 0;
let prev = '';
let result = true;

for (let i = 1; i <= loop; i++) {
  input[i].split('').forEach((el) => {
    if (map.get(el) === undefined) {
      map.set(el, { val: 1 });
    } else {
      if (prev == el) map.set(el, { val: 1 });
      else {
        let find = map.get(el).val;
        if (find == 1) result = false;
      }
    }
    prev = el;
  });
  //맵 초기화 및 result 변경 및 count 추가
  map.clear();
  if (result) count++;
  result = true;
}

console.log(count);
