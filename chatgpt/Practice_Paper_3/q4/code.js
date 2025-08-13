// Complete the function getLongestCommonPrefix which:

//     Has one parameter:

//         words: An array of strings

//     Returns the longest common prefix shared by all words. If none, return "".

function getLongestCommonPrefix(words) {
    if(words.length == 0){
        return ""
    }
    let prefix = ""
    let firstWord = words[0]
    for(let i=0;i<firstWord.length;i++){
        let currentChar = firstWord[i]
        for(let j=1;j<words.length;j++){
            if(i>=words[j].length || words[j][i]!= currentChar){
                return prefix
            }
        }
        prefix += currentChar
    }
    return prefix
}

console.log(getLongestCommonPrefix(["flower", "flow", "flight"]));
// Returns "fl"
