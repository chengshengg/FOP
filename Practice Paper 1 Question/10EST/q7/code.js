function replaceVowels(letterArray) {
    vowels = ["a", "e", "i", "o", "u"]
    // for(i=0;i<letterArray.length;i++){
    //     for(j=0;j<vowels.length;j++){
    //         if(letterArray[i] == vowels[j]){
    //             letterArray[i] = "#"
    //         }
    //     }
    // }
    // return letterArray
    let result = []
    for(let i=0;i<letterArray.length;i++){
        if(vowels.includes(letterArray[i])){ 
            result.push("#")
        }else{
            result.push(letterArray[i])
        }
    }
    return result
}

console.log(replaceVowels(['b', 'a', 'n', 'a', 'n', 'a'])); // ["b", "#", "n", "#", "n", "#"]

module.exports = replaceVowels;
