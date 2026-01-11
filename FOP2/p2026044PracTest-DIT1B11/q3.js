/* 
    Question 3
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

function multiplier (value, operation) {
    /* TODO: Add code here */
    return operation(value)
}

function double (value) {  
    /* TODO: Add code here */
    return value*2
} 

function triple (value) {
    /* TODO: Add code here */
    return value*3
}

function quadruple (value) {
    /* TODO: Add code here */
    return value*4
}

let x = 5;

console.log("Double the value x : " + multiplier (x, double));
console.log("Triple the value x : " + multiplier (x, triple));
console.log("Quadruple the value x : " + multiplier (x, quadruple));
