// 소수 구하기
// https://www.acmicpc.net/problem/1929

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let M = parseInt(input[0]);
let N = parseInt(input[1]);

// 무식한... 방법....ㅠㅠ 시간 초과
// const primeFind = (num) => {
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// };

const solution = (m, n) => {
  let result = [];
  let isPrimeNum = Array(n + 1).fill(true);
  isPrimeNum[0] = false;
  isPrimeNum[1] = false;

  /*
    1. 2부터 N까지의 모든 자연수를 나열한다.
    2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.
    3. 남은 수 중에서 i의 배수를 모두 제거한다. (i는 제거하지 않는다.)
    4. 더 이상 반복할 수 없을 때까지 2번과 3번의 과정을 반복한다.
  */

  //  자연수의 모든 약수를 찾을 때 가운데 약수(제곱근)까지만 확인
  // 에라토스테네스의 체 : 다수의 자연수에 대하여 소수 여부를 판별할 때 사용
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (isPrimeNum[i]) {
      let m = 2;
      //3 ~ 4
      while (i * m <= n) {
        isPrimeNum[i * m] = false;
        m++;
      }
    }
  }

  for (let i = m; i <= n; i++) {
    if (isPrimeNum[i]) {
      result.push(i);
    }
  }

  return result.join('\n');
};

console.log(solution(M, N));
