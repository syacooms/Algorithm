/**
//https://leetcode.com/problems/binary-tree-inorder-traversal/

//DFS 중위순회 기본 문제


* Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  const solution = (node) => {
    if (!node) return;

    solution(node.left);
    result.push(node.val);
    solution(node.right);
  };

  solution(root);

  return result;
};
