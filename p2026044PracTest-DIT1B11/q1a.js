/* 
    Question 1a
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

var y = true; 

if (y){   
    let y = 20; 
    console.log("Value of y in if statement is " + y); 
}  
console.log("Value of y is " + y); 

/* Explain the problem with the original program. */
/* Enter your explanation here. 

varaible y is declared as a global variable and is reassigned to be 20 inside the if block, 
hence when it is called outside of the if block,
its value remains to be 20.

*/