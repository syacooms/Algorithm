// https://leetcode.com/problems/move-zeroes

// two pointer 간만에 만만한 문제나와서 함수형으로 짜봤는데.. 오답 ㅠㅠ

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }

  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// 나의 풀이 (오답)
//  if(nums.length == 1 && nums[0] == 0) return nums

//     let zeroFilter = nums.filter((el) => el == 0);
//     let zero = zeroFilter.length;

//     nums = nums.filter((el) => el !== 0);
//     nums.sort((a,b) => a-b);

//     for(let i = 0; i < zero; i++){
//         nums.push(0);
//     }
