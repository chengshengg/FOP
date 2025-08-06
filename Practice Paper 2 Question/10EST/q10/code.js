function getTotalSpendingBySingles(personArray) {
    sum = 0
    for(i=0;i<personArray.length;i++){
        if(personArray[i].isSingle == true){
            for(j=0;j<personArray[i].spendings.length;j++){
                sum += personArray[i].spendings[j]
            }
        }
    }
    return sum
}

console.log(
    getTotalSpendingBySingles([
        { isSingle: true, spendings: [20, 50, 30] },
        { isSingle: false, spendings: [100, 200] },
        { isSingle: true, spendings: [10, 40] },
    ]),
); // 150

module.exports = getTotalSpendingBySingles;
