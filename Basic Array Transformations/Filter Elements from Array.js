/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Filter Elements from Array' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 14, 2024
 **/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    // Filter through all the elements
    filteredArr = []
    for( var i = 0; i < arr.length; i++ ){
        if( fn( arr[i], i) ){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};