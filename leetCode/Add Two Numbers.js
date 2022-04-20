//https://leetcode.com/problems/add-two-numbers/


//이제부터 미디엄 문제.. return 값이 리스트 노드인 것을 못보고 1시간동안 풀었다. 결국엔 오답. 다시봐야한다.
//나의 풀이

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    if(l1.length == 1 && l1[1] == 0 && l2.length == 1 && l2[1]== 0) return l1[1];
    
    let num0 = '';
    let num1 = '';

    num0 += l1.val + '';
    num1 += l2.val + '';
    while(l1 && l1.next){
        if(l1.next){
            l1 = l1.next;
            num0 += l1.val + '';
        }
    }

    while(l2 && l2.next){
        if(l2.next){
            l2 = l2.next;
            num1 += l2.val + '';
        }
    }
   
    let nums = Number(num0) + Number(num1);
    
    let str = nums + '';
    let reverse = str.split("").reverse().join(""); 
    
    let result = []
    reverse.split('').map(el => result.push(el));
    
    return result;
    
};


//discuss 풀이
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};