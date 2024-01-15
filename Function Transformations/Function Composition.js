/**
 *  Description     : [30 Days of JavaScript] — My solution to the 'Function Composition' 
 *                    problem on LeetCode.
 * 
 *  Author          : Giordan Andrew
 *  Date            : January 15, 2024


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Edge case
        if( functions.length == 0){
            return x
        }

        // Calculate the function composition
        let output_of_function = 0;
        for( let i = functions.length-1; i >= 0; i--){
            // Basa Case: Using the parameter of x for the first function [ E.g f(x) ]
            if( i ==  functions.length-1 ){
                output_of_function = functions[i](x)
            }
            // Other Cases: Using the output of the previous functions to calculate the compose [ E.g g(f(x)) ]
            else{
                output_of_function = functions[i](output_of_function)
            }
           
        } 
        return output_of_function;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */