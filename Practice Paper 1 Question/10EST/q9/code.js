function countLongShortWords(wordArray) {
    // wordshort = 0
    // wordlong = 0

    // for(i=0;i<wordArray.length;i++){
    //     if(wordArray[i].length>=8){
    //         wordlong++
    //     }else{
    //         wordshort++
    //     }
    // }
    // obj = {
    //     long: wordlong,
    //     short: wordshort
    // }
    // return obj
    let result = {
        long: 0,
        short: 0
    }
    for(let i=0;i<wordArray.length;i++){
        if(wordArray[i].length<8){
            result.short += 1
        }else{
            result.long += 1
        }
    }
    return result
}

console.log(countLongShortWords(['sunflower', 'seed', 'tree', 'galaxy', 'cupcakes'])); //{ long: 2, short: 3 }

module.exports = countLongShortWords;
