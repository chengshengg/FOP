/*Higher-Order functions

Write a higher-order function that will return all the odd or even numbers of a numerical array.

Function name: odd_even
Variable: 
operation – odd, even
numbers – an array of data, example: num = [4, 6, 7 ] ; 

Function:

odd_even(operation, numbers) { 

}
*/
num = [4, 6, 7 ]

function odd_even(operation, numbers) {
    return operation(numbers)
    
}
function odd(arr){
    return arr.filter((num) => {    // using array filter method, You don’t need a separate result array; filter() already returns a new array
        return num % 2 != 0
    })
}
function even(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd_even(even, num))
console.log(odd_even(odd, num))