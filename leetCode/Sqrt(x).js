//https://leetcode.com/problems/sqrtx/

// 제곱근 구하는 문제 바이너리 서치로 푸는 방법도 잇음.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 1;
  while (result * result <= x) {
    result++;
  }

  return result - 1;
};
