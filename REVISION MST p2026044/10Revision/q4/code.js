function countApples(appleRedIntensity) {
    result = [0,0,0,0]
    for (i=0; i<appleRedIntensity.length; i++) {
        if (appleRedIntensity[i] < 0.25) {
            result[0] += 1
        }
        if (appleRedIntensity[i] >= 0.25 && appleRedIntensity[i] < 0.5) {
            result[1] += 1
        }
        if (appleRedIntensity[i] >= 0.5 && appleRedIntensity[i] < 0.75) {
            result[2] += 1
        }
        if (appleRedIntensity[i] >= 0.75 && appleRedIntensity[i] < 1) {
            result[3] += 1
        }
    }
    return result
}

// Your own test cases
// e.g.;

console.log(countApples([0.34, 0.23, 0.99, 0.68, 0.42])); // 9

module.exports = countApples;
