function calculateAnimalsInPettingZoo(totalAnimals, totalFeet) {
    sum = 0
    for(i=0; i<totalAnimals+1; i++) {
        sum = i*4 + (totalAnimals - i)*2
        if (sum == totalFeet) {
            return totalAnimals - i
        }
    }   
}

// Your own test cases
// e.g.;

console.log(calculateAnimalsInPettingZoo([20, 10, 30, 60], [100, 60, 120, 150], 50));

module.exports = calculateAnimalsInPettingZoo;
