/**
 * Given a array of number, check if they are either
 * 1. Ascending - each element is greater than the previous
 * 2. Non-descending - each element is greater than or equal to the previous
 * 3. Descending - each element is lesser than the previous
 * 4. Non-ascending - each element is lesser than or equal to the previous
 * 6. Constant - all elements are the same
 * 5. Unsorted - none of the above
 *
 * @param {number[]} array - An array of numbers.
 * @returns {string} - The type of the array.
 *
 * @example
 * checkArray([1, 2, 3, 4, 5]); // 'Ascending'
 * checkArray([5, 4, 3, 2, 1]); // 'Descending'
 * checkArray([1, 1, 1, 1, 1]); // 'Constant'
 * checkArray([1, 2, 2, 3, 4]); // 'Non-descending'
 * checkArray([5, 4, 4, 3, 2]); // 'Non-ascending'
 * checkArray([1, 2, 4, 3, 5]); // 'Unsorted'
 */
function checkArray(array) {
    ascending = true
    descending = true
    constant = true
    nondescending = true
    nonascending = true
    for(i=0;i<array.length;i++){
        if(array[i]<array[i+1]){
            descending = false
            constant = false
            nonascending = false
        }
        if(array[i]>array[i+1]){
            ascending = false
            constant = false
            nondescending = false
        }
        if(array[i]==array[i+1]){
            ascending = false
            descending = false
        }
    }
    if(ascending == true){
        return "Ascending"
    }
    if(descending == true){
        return "Descending"
    }
    if(constant == true){
        return "Constant"
    }
    if(nonascending == true){
        return "Non-ascending"
    }
    if(nondescending == true){
        return "Non-descending"
    }
    return "Unsorted"
}

// Your own test cases
// e.g.;

console.log(checkArray([1, 2, 3, 4, 5])); // 'Ascending'

// To test your code against the test cases: node run.js p6 q4
// To test your code against custom input: node ./6Arrays/q4/code.js

module.exports = checkArray;
