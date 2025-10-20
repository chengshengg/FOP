function findClosestFruitWeight(fruitArray, target) {
    lowest = Math.abs(fruitArray[0].weight - target)
    who = fruitArray[0]
    for(let i=1;i<fruitArray.length;i++){
        let current = fruitArray[i]
        if(Math.abs(current.weight - target) < lowest){
            lowest = Math.abs(current.weight - target)
            who = current
        }
        
    }
    return who
}

console.log(
    findClosestFruitWeight(
        [
            { name: 'raspberry', weight: 10 },
            { name: 'blueberry', weight: 14 },
        ],
        18,
    ),
); // { name : 'blueberry', weight : 14 }

module.exports = findClosestFruitWeight;
