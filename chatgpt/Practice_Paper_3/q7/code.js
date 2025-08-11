// Complete the function groupByFirstLetter which:

//     Has one parameter:

//         words: An array of strings

//     Returns an object where each key is the first letter of words, and its value is an array of words starting with that letter.
function groupByFirstLetter(words) {
    let result = {}
    for(let i=0;i<words.length;i++){
        let word = words[i]
        let letter = word[0]
        if(result[letter] == undefined){
            result[letter] = []
            result[letter].push(word)
        }else{
            result[letter].push(word)
        }
    }
    return result
}

console.log(groupByFirstLetter(["apple", "banana", "apricot"]));
// Returns { a: ["apple", "apricot"], b: ["banana"] })
