/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {string} string - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * longestSubstringWithoutRepeats('abcabcbb'); // 3
 * longestSubstringWithoutRepeats('bbbbb'); // 1
 * longestSubstringWithoutRepeats('pwwkew'); // 3
 *
 * @explanation
 * For the first example, the longest substring without repeating characters is 'abc', which has a length of 3.
 * For the second example, the longest substring without repeating characters is 'b', which has a length of 1.
 * For the third example, the longest substring without repeating characters is 'wke or 'kew', both which has a length of 3.
 */
// function longestSubstringWithoutRepeats(string) {
//     start = 0
//     end = 1
//     longest = 0
//     while(end<string.length) {
//         if(string[start] == string[end]) {
//             if(longest<end - start) {
//                 longest = end - start
//                 start++
//                 end = start +1
//             }
//         } 
//         if(end == string.length -1) {
//             if(longest<=end - start) {
//                 longest = (end - start) +1
//             }
//         }
//         end++
//     }
//     return longest
// }

function longestSubstringWithoutRepeats(string) {
    let start = 0;
    let i = 0; // pointer/index like `i` in the original for-loop
    let maxLength = 0;
    let charIndexMap = {};

    while (i < string.length) {
        const char = string[i];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            // Duplicate found inside current window
            start = charIndexMap[char] + 1;
        }

        // Update latest index of this character
        charIndexMap[char] = i;

        // Update maxLength
        maxLength = Math.max(maxLength, i - start + 1);

        i++; // Move the pointer forward
    }

    return maxLength;
}

// Your own test cases
// e.g.;

console.log(longestSubstringWithoutRepeats('abcabcbb'));

// To test your code against the test cases: node run.js q4
// To test your code against custom input: node ./q4/code.js

module.exports = longestSubstringWithoutRepeats;
