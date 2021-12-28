// 단어정렬
// https://www.acmicpc.net/problem/1181

// 일주일전에는 알파벳마다 번호를 줫는데.. 틀려서 결국 해설풀이 봣다..

// /dev/stdin
let fs = require('fs');
let [n, ...words] = fs.readFileSync('예제.txt').toString().trim().split('\n');

Array.from(new Set(words))
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length)
  .forEach((i) => console.log(i));
