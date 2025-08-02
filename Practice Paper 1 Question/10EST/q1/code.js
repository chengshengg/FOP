function calculateBMI(person) {
    return (person.weight/(person.height * person.height))
}

console.log(calculateBMI({ weight: 70, height: 1.75 })); // 22.857142...

module.exports = calculateBMI;
