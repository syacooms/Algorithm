// https://leetcode.com/problems/single-number/

// map으로 담는 방법 채택 , reduce로 푸는 방법도 있더라..

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums.shift();

  const map = {};
  // map 형태로 null 일 경우 0 선언
  // 있을 경우 ++;
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  // map의 n이 1일 경우 return
  for (let n in map) {
    if (map[n] == 1) return n;
  }
};
