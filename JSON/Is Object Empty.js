/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Is Object Empty' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 18, 2024
 **/


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Convert obj to array and calculate length 
    lenOfArr = Object.keys(obj).length 
    return lenOfArr === 0 ? true : false
};