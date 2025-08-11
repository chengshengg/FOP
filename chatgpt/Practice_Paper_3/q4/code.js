// Complete the function getLongestCommonPrefix which:

//     Has one parameter:

//         words: An array of strings

//     Returns the longest common prefix shared by all words. If none, return "".

function getLongestCommonPrefix(words) {
    let result = ""
    for(let i=0;i<words.length;i++){
        let word = words[i]
        let letter = word[i]
        
        for(let j=1;j<words.length;j++){
            if(letter != words[j][i]){
                result -= letter
            }else{
                result += letter
            }
        }
    }
    return result
}

console.log(getLongestCommonPrefix(["flower", "flow", "flight"]));
// Returns "fl"
