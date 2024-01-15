/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'To Be Or Not To Be'
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 14, 2024
 **/


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let obj = {
        // toBe() Function
        toBe: (val_2) => {
            if( val === val_2 ){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        // notToBe() function
        notToBe: (val_2) => {
            if( val !== val_2){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    };
    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */