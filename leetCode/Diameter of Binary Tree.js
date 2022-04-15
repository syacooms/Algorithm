//https://leetcode.com/problems/diameter-of-binary-tree/

//먼거리 구하는 문제.. 이진트리 문제를 몇개를 풀엇는데 답답.(dfs) 서브밋 제출안함

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const solution = (node) => {
    if (!node) return 0;

    const L = solution(node.left);
    const R = solution(node.right);

    max = Math.max(max, L + R);
    return Math.max(L, R) + 1;
  };

  solution(root);

  return max;
};
