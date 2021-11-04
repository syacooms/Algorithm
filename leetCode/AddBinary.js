//https://leetcode.com/problems/add-binary

// 이진수를 더한 값 표현.
// 십진수로 변환 시 0b를 앞에 붙여줘야함.
// .toString(2) 표현으로 10진수를 변환한 값을 이진수로 표현

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
