/* 
    Question 1b
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

let temperatures = [28, 33, 31, 27, 35, 29, 32];
let hotDays = [];

for (let i = 0; i < temperatures.length; i++) {
  let dayTemp = temperatures[i];
  console.log("Temperature of day", i, "is", dayTemp);
  if (dayTemp >= 30) {
    hotDays.push(i);
  }
}

console.log("Hot days indices:", hotDays);


/* Explain why the original program did not work correctly.  */
/* Enter your explanation here.

due to block scope, whatever values being added to hotDays is only modified inside of the for loop,
but outside of the for loop, hotDays is still undefined.

*/