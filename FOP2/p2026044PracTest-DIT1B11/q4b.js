/* 
    Question 4b
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

const animals = [
  { name: "lion", age: 5, type: "mammal" },
  { name: "shark", age: 10, type: "fish" },
  { name: "elephant", age: 15, type: "mammal" },
  { name: "eagle", age: 3, type: "bird" },
  { name: "tiger", age: 7, type: "mammal" },
  { name: "crow", age: 4, type: "bird" },
  { name: "Snapper", age: 2, type: "fish" },
  { name: "Salmon", age: 5, type: "fish" },
];


// Question 4b part i 
/* TODO: Add code here */
console.log(animals.filter((e) => e.type == "bird"))
// Question 4b part ii 
/* TODO: Add code here */
let result = []
animals
.filter((e) => e.type == "mammal")
.forEach((e) => result.push(e.name))
console.log(`Mammals names: ${result}`)
// Question 4b part iii 
/* TODO: Add code here */
let count = animals.reduce((acc, cur) => {
  if (cur.age<=3) {
    acc += 1
  }return acc
}, 0)
console.log(`Total number of animals with age less than or equal to 3: ${count}.`)