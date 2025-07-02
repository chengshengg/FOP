function countOccurrences(visitorA, visitorB, visitorC) {
    let count = 0;
    const minCount = Math.min(visitorA.length, visitorB.length, visitorC.length);
    for (let i = 0; i < minCount; i++) {
        if (visitorA[i] === visitorB[i] && visitorB[i] === visitorC[i]) count += 1;
    }
    return count;
}

// Your own test cases
// e.g.;

console.log(countOccurrences(['A', 'B', 'D', 'C', 'E'], ['A', 'C', 'D'], ['A', 'B', 'D', 'E'])); // 2

module.exports = countOccurrences;
