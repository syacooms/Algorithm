// 단어 공부
// https://www.acmicpc.net/problem/1157

// 입력 String 변환 후 trim() 붙이기.

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let result = new Map();

// 대문자 치환 -> Map에 없을 경우 key,value 삽입
input[0]
  .toUpperCase()
  .split('')
  .forEach((el) => {
    if (result.get(el) === undefined) result.set(el, { val: 1 });
    else result.get(el).val++;
  });

let max = 0;
let symbol;

//Map iterator
result.forEach((val, key, map) => {
  if (result.size == 1) return (symbol = key);
  if (max == map.get(key).val) symbol = '?';
  if (map.get(key).val > max) {
    max = map.get(key).val;
    symbol = key;
  }
});

console.log(symbol);
