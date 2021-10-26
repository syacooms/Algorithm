//https://leetcode.com/problems/longest-common-prefix/

//배열의 인덱스들 중 같은 문자 찾는 문제

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;  
        } 
        return prev.slice(0, i);
    });
};
