function getAverageWeightOfFruits(fruit1, fruit2, fruit3) {
    let sum = fruit1.weight + fruit2.weight + fruit3.weight
    return sum/3
}

console.log(
    getAverageWeightOfFruits(
        { name: 'Mango', weight: 200 },
        { name: 'Grape', weight: 250 },
        { name: 'Melon', weight: 450 },
    ),
); // 300

module.exports = getAverageWeightOfFruits;
