// https://leetcode.com/problems/majority-element/

// 많은 요소를 반환하는?? 문제
// obj로 만들어 담는거까진 쉽게 했는데, 오히려 결과 도출에서 해결방안을 봐야했다..

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};

  nums.map((el) => {
    if (obj[el] == null) obj[el] = 0;
    obj[el]++;
  });

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};
