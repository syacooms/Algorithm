//https://leetcode.com/problems/length-of-last-word/

//문자열 자르기 문제

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.trim().split(" ");
  const index = arr[arr.length - 1].length;

  return index;
};
