function countLongShortWords(wordArray) {
    wordshort = 0
    wordlong = 0

    for(i=0;i<wordArray.length;i++){
        if(wordArray[i].length>=8){
            wordlong++
        }else{
            wordshort++
        }
    }
    obj = {
        long: wordlong,
        short: wordshort
    }
    return obj
}

console.log(countLongShortWords(['sunflower', 'seed', 'tree', 'galaxy', 'cupcakes'])); //{ long: 2, short: 3 }

module.exports = countLongShortWords;
