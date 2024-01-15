/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Array Reduce Transformation' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 14, 2024
 **/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Edge case
    if( nums.length == 0 ){
        return init;
    }

    // Sequentially execute the reducer function for all elements in the array
    let tempVal = 0;
    for( let i = 0; i < nums.length;i++){
        if( i == 0 ){
            tempVal = fn(init, nums[i])
        }else{
            tempVal = fn(tempVal, nums[i])
        }
    }
    return tempVal
};
