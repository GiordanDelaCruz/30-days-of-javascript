/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Create Hello World Function' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 13, 2024
 **/
 

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */