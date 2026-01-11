/* 
    Question 1c
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

const numArray = [ 1, 2, 3, 4, 5 ]; 

for (let x = 6; x <= 10; x++) {      
 
    numArray.push(x); 
}  
console.log(numArray); 

/* Explain the problem with the original program. */
/* Enter your explanation here.

due to block scope, inside of the for loop, local varaible numArray is being added to be [6, 7, 8, 9, 10]
but outside of the for loop, global variable numArray remains to be [ 1, 2, 3, 4, 5].

*/