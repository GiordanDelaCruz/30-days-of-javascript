/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Counter II'
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 14, 2024
 **/


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init; // Used ofr memory ( keep track of the starting number)

    return{
        // Returns an object with 3 functions
        increment: () => {
            return ++count;
        }, 
        decrement: () => {
            return --count;
        }, 
        reset: () => {
            count = init;
            return count;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */