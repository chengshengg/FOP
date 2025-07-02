function filterNonFactorOfSum(numbers) {
    let sum = 0;
    let newArray = []
    for (i=0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    for (j=0; j<numbers.length; j++) {
        if (sum % numbers[j] == 0) {
            newArray.push(numbers[j])
        }
    } return newArray
}

// Your own test cases
// e.g.;

console.log(filterNonFactorOfSum([5, 11, 14, 25])); // [5, 11]

module.exports = filterNonFactorOfSum;
