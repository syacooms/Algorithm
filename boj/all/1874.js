// 스택 수열
// https://www.acmicpc.net/problem/1874

// /dev/stdin
let fs = require('fs');
let [N, ...sequence] = fs
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

sequence = sequence.map((el) => +el);

const solution = (n, seq) => {
  let stack = [];
  let result = '';
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = parseInt(i + 1);
  }

  for (let i = 0; i < n; i++) {
    let count = 1;
    while (count <= n && stack[stack.length - 1] != seq[i]) {
      stack.push(arr.shift());
      result += '+\n';
      count++;
    }

    if (stack[stack.length - 1] == seq[i]) {
      stack.pop();
      result += '-\n';
    } else {
      result = 'NO';
      break;
    }
  }

  return result;
};

console.log(solution(N, sequence));
