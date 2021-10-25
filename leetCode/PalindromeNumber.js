//https://leetcode.com/problems/palindrome-number

//오랜만에 풀었는데 개못짜.. 회문문자 확인하는 문제

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let chkNum = x
    if(Number(chkNum) < 0) return false
    let chkString = x + '';
    var check = reverse(chkString);
    
    return check;
};

var reverse = function(chkString) {
    let result = "";
    

    for(var i=chkString.length-1; i>=0; i--){
        result += chkString[i];
    }
    
    if(chkString === result) return true;
    
    return false;
}