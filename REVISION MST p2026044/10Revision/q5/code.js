function findExtremeSum(min, max, targetSum) {
    array = []
    for (i=min; i<=max; i++) {
        sum = 0
        for (j=0; j<4; j++) {
            array[j] = i+j
            sum += array[j]
        }
        if (sum == targetSum) {
            return array[3]
        } 
    }return 0
}

// Your own test cases
// e.g.;

console.log(findExtremeSum(5, 15, 30)); // 9

module.exports = findExtremeSum;
