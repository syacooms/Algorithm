//https://leetcode.com/problems/remove-element/

//요소 자르기 문제..
//같은 요소일 경우 i를 되돌려서 다시 반복한다.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      console.log(i);
    }
  }
  return nums.length;
};
