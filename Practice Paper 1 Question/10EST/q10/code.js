function getTotalWeightByFruitType(fruitArray) {}

console.log(
    getTotalWeightByFruitType([
        { type: 'apple', weight: 200 },
        { type: 'banana', weight: 150 },
        { type: 'apple', weight: 180 },
        { type: 'banana', weight: 170 },
        { type: 'mango', weight: 300 },
    ]),
); // { apple: 380, banana: 320, mango: 300 }

module.exports = getTotalWeightByFruitType;
