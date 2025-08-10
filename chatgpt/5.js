// isSameLength

// Complete the function isSameLength which:

//     Has two parameters: str1 and str2 (strings)

//     Return "same" if both have the same length, otherwise "different".

// Sample 1

// Input: isSameLength("cat", "dog");
// Returns: "same"

function isSameLength(str1, str2){
    if(str1.length == str2.length){
        return "same"
    }else{
        return "different"
    }
}

console.log(isSameLength("cat", "dog"))