/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Counter'
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 13, 2024
 **/


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count = -1;
    return function() {
        count++
        return n + count
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */