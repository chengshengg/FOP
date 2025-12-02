/* 
	Question 2
	Name: Kong Cheng Sheng
	Admin No: p2026044
	Class: DIT1B011
	
*/

// Function: statvalue 
// Higher Order Function

// TODO: Code here

function statfunc(operation, numbers){
	return operation(numbers)
}
function addition(arr){
	let total = 0
	for(let i=0;i<arr.length;i++){
		total += arr[i]
	}
	return total
}
function average(arr){
	let total = 0
	let counter = 0
	for(let i=0;i<arr.length;i++){
		total += arr[i]
		counter++
	}
	return total/counter
}
// Test the higher order function 
// using the following data

/*
sum = [1, 2, 4, 3, 7, 9];
average = [1, 2, 4, 3, 7, 9];
*/
console.log(statfunc(addition, [1, 2, 4, 3, 7, 9]))
console.log(statfunc(average, [1, 2, 4, 3, 7, 9]))
