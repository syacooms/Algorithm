// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// 이진트리의 최대 깊이를 찾는 문제.. 재귀가 아닌 것의 풀이

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
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length !== 0) {
    depth++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.slice(0, len);
  }

  return depth;
};
