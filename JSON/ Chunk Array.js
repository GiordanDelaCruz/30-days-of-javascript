/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Chunk Array' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : February 11, 2024
 **/


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

    // Split array into sub arrays
    let finalArr = []
    for(let i = 0; i < arr.length; i+= size){
        finalArr.push( arr.slice(i, i+size) )
    }

    return finalArr;
};
