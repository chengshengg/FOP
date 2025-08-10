// sumOfEvenNumbers

// Complete the function sumOfEvenNumbers which:

//     Has one parameter:

//         numbers: an array of integers

//     Returns the sum of all even numbers in the array.

//     Assume at least one even number exists.

// Sample 1

// Input: sumOfEvenNumbers([1, 2, 3, 4, 5, 6]);
// Returns: 12

function sumOfEvenNumbers(numbers){
    sum = 0
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            sum += numbers[i]
        }
    }
    return sum
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]))