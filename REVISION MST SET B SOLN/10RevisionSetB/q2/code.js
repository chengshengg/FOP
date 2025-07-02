function filterNonFactorOfSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (sum % numbers[i] === 0) result.push(numbers[i]);
    }

    return result;
}

// Your own test cases
// e.g.;

console.log(filterNonFactorOfSum([5, 11, 14, 25])); // [5, 11]

module.exports = filterNonFactorOfSum;
