/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Allow One Function Call' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 15, 2024
 **/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let oneUseOnly = 1;

    return function(...args){
        if( oneUseOnly == 1){
            oneUseOnly--; // Turn of use of function
            return fn(...args)
        }else{
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
