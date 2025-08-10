// getSquareNumbers

// Complete the function getSquareNumbers which:

//     Has one parameter:

//         nums: an array of integers

//     Returns a new array containing the square of each number.

// Sample 1

// Input: getSquareNumbers([2, 4, 5]);
// Returns: [4, 16, 25]

function getSquareNumbers(nums){
    arr = []
    for(let i=0;i<nums.length;i++){
        arr.push(nums[i]**2)
    }
    return arr
}

console.log(getSquareNumbers([2, 4, 5]))