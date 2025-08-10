// getLongestWord

// Complete the function getLongestWord which:

//     Has one parameter:

//         words: an array of strings

//     Returns the longest word in the array.

//     Assume no ties in length.

// Sample 1

// Input: getLongestWord(["dog", "elephant", "cat"]);
// Returns: "elephant"

function getLongestWord(words){
    let longest = words[0]
    for(let i=1;i<words.length;i++){
        if(words[i].length>longest.length){
            longest = words[i]
        }
    }
    return longest
}

console.log(getLongestWord(["dog", "elephant", "cat"]))