// https://leetcode.com/problems/min-stack/

// stack 구현 문제..  prototype 구현체 첨봄.. class를 못쓰기 땜에 쓴단다.
// 답을 봐도 잘 모르겟음..

var MinStack = function () {
    this.elements = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.elements.push({
        value: val,
        min: this.elements.length === 0 ? val : Math.min(val,this.elements.getMin());
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.elements.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    this.elements[this.elements.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    this.elements[this.elements.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
