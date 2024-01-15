/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Apply Transform Over 
 *                    Each Element in Array' problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 14, 2024
 **/



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    // Apply transformation to each element in the array
    var tArr = [];  // Transformed array
    for( var i = 0; i < arr.length; i++ ){
        tArr[i] = fn(arr[i], i); 
    }
    return tArr;
};