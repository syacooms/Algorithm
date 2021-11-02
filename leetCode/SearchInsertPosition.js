// https://leetcode.com/problems/search-insert-position/

//Index 찾는 문제 없을 경우 순서대로 넣을 Index 반환

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] < target) count++;
  }

  return count;
};
