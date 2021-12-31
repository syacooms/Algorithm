// 랜선 자르기
// https://www.acmicpc.net/problem/1654

// /dev/stdin
let fs = require('fs');
let [NK, ...ropes] = fs.readFileSync('예제.txt').toString().trim().split('\n');

NK = NK.split(' ');
let N = parseInt(NK[0]);
let K = parseInt(NK[1]);

let LIST = [...ropes].map((el) => +el);

// 이분탐색 : 탐색 범위를 두 부분으로 분할하는 방식
// max , mid , min 값을 잡아서 탐색
// 점자 탐색범위를 줄여서 result 값 return

const solution = (k, list) => {
  let lines = list.sort((a, b) => a - b);

  let max = Math.max(...lines);
  let min = 1;

  while (min <= max) {
    // 중간값
    let mid = parseInt((max + min) / 2);

    // mid 값으로 나누고 전부 더해서 11개 이상인지 판별
    let onlines = lines
      .map((el) => parseInt(el / mid))
      .reduce((acc, cur) => acc + cur, 0);

    // onlines의 값에 따라 최솟값, 최댓값 변경
    // | ------------ | ---------- |
    //               <->
    // 값이 클 경우 max 값 변경
    // 값이 작을 경우 min 값 변경
    if (onlines >= k) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return max;
};

console.log(solution(K, LIST));
