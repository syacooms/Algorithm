//https://leetcode.com/problems/valid-parentheses/


//stack 문제 내 오답.. 자바스크립트는 shift(),pop()등으로 구현이 가능하다.
//내일 다시 풀기


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s === undefined || s.length == 0 || s.length % 2 !== 0) return false
    
    let arr = [];
    
    for(var i = 0; i<s.length; i++){
        arr.push(s[i]);
        if(s[i] === ')'){
            let char = arr.find((x) => x === '(');
            if(char == undefined) return false;
        }
        if(s[i] === ']'){
            let char = arr.find((x) => x === '[');
            if(char == undefined) return false;
        }
        if(s[i] === '}'){
            let char = arr.find((x) => x === '{');
            if(char == undefined) return false;            
        }
    }
    
    return true;
    
};



//좋은 답안
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};


//map 형태로 푼 답안 . 이런 형태를 생각도 했는데 구현을 못함.
var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    
    return !stack.length;
};