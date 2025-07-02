function countOccurrences(visitorA, visitorB, visitorC) {
    let count = 0;
    for (i=0; i<visitorA.length; i++) {
        if (visitorA[i] === visitorB[i] && visitorB[i] === visitorC[i]) {
            count++;
        }
    } return count
}

// Your own test cases
// e.g.;

console.log(countOccurrences(['A', 'B', 'D', 'C', 'E'], ['A', 'C', 'D'], ['A', 'B', 'D', 'E'])); // 2

module.exports = countOccurrences;
