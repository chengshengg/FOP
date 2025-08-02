function getTotalWeightByFruitType(fruitArray) {
    totals = {}
    for(i=0;i<fruitArray.length;i++){
        fruit = fruitArray[i]
        type = fruit.type
        weight = fruit.weight
        if(totals[type]!= undefined){
            totals[type] += weight
        }else {
            totals[type] = weight
        }
    }
    return totals
}

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
