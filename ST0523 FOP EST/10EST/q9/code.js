function getTopSaver(saversArray) {
    let highestSum = 0
    let who = null
    for(let i=0;i<saversArray.length;i++){
        let current = saversArray[i]
        let sum = 0
        for(let j=0;j<current.savings.length;j++){
            sum += current.savings[j]
        }
        if(sum>highestSum){
            highestSum = sum
            who = current.name
        }
    }
    return who
    
}

console.log(
    getTopSaver([
        { name: 'Zen', savings: [80, 65, 24, 116] },
        { name: 'Yvonne', savings: [300] },
    ]),
); // Yvonne

module.exports = getTopSaver;
