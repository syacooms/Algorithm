// 수 찾기
// https://www.acmicpc.net/problem/1920

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

//string -> number
let NM = [];
for (val of input) {
  NM.push(val.split(' ').map((el) => +el));
}

//입력값 세팅
let N = [];
let M = [];

for (let i = 0; i < NM.length; i = i + 2) {
  N.push(NM[i]);
}

for (let j = 1; j < NM.length; j = j + 2) {
  M.push(NM[j]);
}

// array index 값으로 mid 판별 -> 여서 막혓음
const binarySearch = (array, target, start, end) => {
  let mid = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const solution = (n, m) => {
  //m[0] 오름차순 세팅
  m[0].sort((a, b) => a - b);

  let start = 0;
  let end = n[0] - 1;
  let result = [];

  m[1].forEach((el) => {
    if (binarySearch(m[0], el, start, end) !== -1) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  return result.join('\n');
};

console.log(solution(N, M));
