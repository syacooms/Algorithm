//https://leetcode.com/problems/reverse-linked-list/

//싱글 링크드 리스트를 뒤집는 문제.. 비슷하게 짯는데 감은 아직 못잡은 듯..

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;

  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }

  /*
    temp = [2,3,4,5],[3,4,5],[4,5],[5]
    head.next = null, [1],[2,1],[3,2,1],[4,3,2,1]
    prev = [1],[2,1],[3,2,1],[4,3,2,1],[5,4,3,2,1]
    head = [2,3,4,5] , [3,4,5], [4,5], [5], null
    */

  return prev;
};
