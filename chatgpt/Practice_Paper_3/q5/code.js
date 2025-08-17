// Complete the function getMostFrequentWord which:

//     Has one parameter:

//         text: A string containing words separated by spaces

//     Returns the word that appears most frequently.

//     You may assume there is no punctuation and no ties.
function getMostFrequentWord(text) {
    let string = text.split(" ")
    let result = {}
    for(let i=0;i<string.length;i++){
        if(result[string[i]] == undefined){
            result[string[i]] = 1
        }else{
            result[string[i]]++
        }
    }
    let highest = 0
    let what = null
    for(let x in result){
        if(result[x]>highest){
            highest = result[x]
            what = x
        }
    }
    return what
}

console.log(getMostFrequentWord("apple orange apple banana orange apple"));
// Returns "apple"
