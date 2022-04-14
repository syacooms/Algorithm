//https://leetcode.com/problems/counting-bits/

//보이는 대로 구현함. 2진법으로 변환하여 1의 자리수 더하여 계산

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    
    let result = [];
    
    for(let i =0; i <= n; i++){
        let cal = i.toString(2);
        if(cal == 0) result.push(0);
        if(cal == 1) result.push(1);
        if(cal.length > 1) {
            let spl = cal;
            let calc = 0;
            spl.split('').map(el => {
                if(el == 1) calc++;
            })
            result.push(calc);
        }
    }
    
    return result
};