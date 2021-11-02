// https://leetcode.com/problems/search-insert-position/

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
