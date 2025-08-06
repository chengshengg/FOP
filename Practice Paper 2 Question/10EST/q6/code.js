function getStringLengths(wordsArray) {
    let length = 0
    let arr = []
    for(i=0;i<wordsArray.length;i++){
        length = wordsArray[i].length
        arr.push(length)
    }
    return arr
}

console.log(getStringLengths(['apple', 'banana', 'kiwi'])); // [5, 6, 4]

module.exports = getStringLengths;
