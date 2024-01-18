/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Return Length of Arguments Passed' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 15, 2024
 **/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */