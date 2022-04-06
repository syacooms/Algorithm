// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

// Linked life cycle 문제가 떠올라 토끼와 거북이 알고리즘을 적용해보려했으나 맞는 답이 아니다.
// 노드 자체를 A+B B+A등과 같이 붙여서 교차노드 형식을 찾는다.

// headA만 돌려서 접근 하는 방식으로 접근해봤는데 당연히 오답.
// 공식을 알았으면 접근이 가능했을 듯 함..

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  // 현재 노드
  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    if (curA.next) {
      curA = curA.next;
    } else {
      //b 노드 다돌았을 경우 -> 일치하는게 없다. null
      if (!curB.next) {
        curA = null;
        curB = null;
        break;
      }
      // A + B -> A다 돌고 B 시작
      curA = headB;
    }
    if (curB.next) {
      curB = curB.next;
    } else {
      // B + A  -> B 다 돌고 A 시작
      curB = headA;
    }
  }

  return curB;
};
