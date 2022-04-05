// https://leetcode.com/problems/linked-list-cycle/

// 순환 노드 찾기.. 몰라서 답지 봤다. 토끼와 거북이 알고리즘(fast and slow algorithm)
// 참조 https://dev-note-97.tistory.com/275

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) return false;

  let tor = head,
    hare = head;

  while (hare && hare.next) {
    tor = tor.next;
    hare = hare.next.next;

    if (tor == hare) return true;
  }

  return false;
};
