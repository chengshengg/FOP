/* 
    Question 2a
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

function squareNumber() {
  /* TODO: Add code here */
  let x = 2
  let count = 0
  return function result(){
    count ++
    return (x+count)**2
  }
}

// Test cases
let num = squareNumber();
console.log(num()); // output: 9
console.log(num()); // output:16
console.log(num()); // output:25
