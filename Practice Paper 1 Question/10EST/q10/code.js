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

function test(fruitArray){
    // find out what are the type of fruits available
    let fruitNames = []
    for(let i=0;i<fruitArray.length;i++){
        let fruit = fruitArray[i]
        if(!fruitNames.includes(fruit.type)){
            fruitNames.push(fruit.type)
        }
    }

    // after the above for loop, fruitNames = ["apple", "banana", "mango"]
    let output = {}
    // find the total weight for the available fruits
    for(let f=0;f<fruitNames.length;f++){
        let name = fruitNames[f] // current string
        let totalWeight = 0 // everytime it loops to a new fruit, totalWeight resets

        for(let j=0;j<fruitArray.length;j++){
            let fruit = fruitArray[i]
            if(fruit.type == name){
                totalWeight += fruit.weight
            }

        }
        output[name] = totalWeight
    }
    return output
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
