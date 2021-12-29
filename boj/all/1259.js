// 팰린드롬수
// https://www.acmicpc.net/problem/1259

// /dev/stdin
let fs = require('fs');
let N = fs.readFileSync('예제.txt').toString().trim().split('\n');

N.pop();

let list = [];

for (val of N) {
  list.push(
    val
      .trim()
      .split('')
      .map((el) => parseInt(el))
  );
}

const solution = (n) => {
  let result = [];

  n.forEach((word) => {
    let end = word.length - 1;
    let flag = 'yes';
    word.map((el) => {
      if (parseInt(el) !== parseInt(word[end])) flag = 'no';
      end--;
    });
    result.push(flag);
  });

  return result.join('\n');
};

console.log(solution(list));
