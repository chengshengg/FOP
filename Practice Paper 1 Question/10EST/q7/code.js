function replaceVowels(letterArray) {
    vowels = ["a", "e", "i", "o", "u"]
    for(i=0;i<letterArray.length;i++){
        for(j=0;j<vowels.length;j++){
            if(letterArray[i] == vowels[j]){
                letterArray[i] = "#"
            }
        }
    }
    return letterArray
}

console.log(replaceVowels(['b', 'a', 'n', 'a', 'n', 'a'])); // ["b", "#", "n", "#", "n", "#"]

module.exports = replaceVowels;
