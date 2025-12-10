/*
Write a higher-order function that can calculate the sum, average, median, mean and mode of a numerical array.

Function: statvalue

Variable: 
operation – sum, average, median,  mode 
numbers – an array of data, example: num = [4, 6, 7 ] ; 

Function:

stat_func(operation, numbers) { 

}
*/
num = [4, 6, 7, 1, 12, 2, 13, 4 ]
numba = [1, 2, 3, 4]

function stat_func(operation, numbers) { 
    return operation(numbers)
}
function sum(arr){
    let sum = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return sum
}   

function average(arr){
    let sum = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return sum/arr.length
}

function median(arr){
    let sortedArr = [...arr].sort((a, b) => a - b) // use spread operator to modify a copy of the array
    if (arr.length % 2 == 0){
        let middleLower = Math.floor((arr.length / 2) -1)
        let middleUpper = Math.floor(arr.length / 2)
        return (sortedArr[middleLower]+sortedArr[middleUpper]) / 2
    } else {
        let middle = Math.floor(arr.length / 2)
        return sortedArr[middle]
    } 
}

function mode(arr){
    if (arr.length === 0) return;

    const freq = {}; // object to store counts

    // Count frequency of each number
    arr.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });

    // Find the maximum frequency
    let maxFreq = 0; 
    for (let key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
        }
    }

    // Find all numbers with max frequency
    const modes = [];
    for (let key in freq) {
        if (freq[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    // Return single mode or array of modes
    return modes.length === 1 ? modes[0] : modes;

}

console.log(stat_func(sum, num))
console.log(stat_func(median, numba))