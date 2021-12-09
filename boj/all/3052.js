// 나머지
// https://www.acmicpc.net/problem/3052

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');
let array = [];

//input.length로 들어가면 틀렸다고 뜸..
for (let i = 0; i < 10; i++) {
  let result = input[i] % 42;
  if (array.indexOf(result) == -1) array.push(result);
}

console.log(array.length);
