
let input = require('readline-sync');

// function test(objs){
//     let total = {}
//     for(i=0;i<objs.length;i++){
//         let fruit = objs[i]
//         let type = fruit.type
//         let weight = fruit.weight
//         if(total[type] != undefined){
//             total[type].weight += weight
//             total[type].count += 1
//         } else{
//             total[type] = {
//                 count: 1,
//                 weight: weight
//             }
//         }
//     }
//     for(let type in total){
//         let current = total[type]
//         let avg = current.weight / current.count
//         total[type].average = avg
        
//     }
//     return total
// }

// console.log(test([
//     { type: "apple", weight: 200 },
//     { type: "banana", weight: 150 },
//     { type: "apple", weight: 100 },
//     { type: "banana", weight: 120 },
//     { type: "mango", weight: 300 }
//   ]))

// function summarizeScores(records){
//     let total = {}
//     count = 1
//     for(i=0;i<records.length;i++){
        
//         let current = records[i]
//         let id = current.studentId
//         let subject = current.subject
//         let score = current.score
//         if(total[id] != undefined){
//             total[id].totalScore += score
//             total[id].count += 1
//             total[id].averageScore = total[id].totalScore/total[id].count
//             total[id].subjects[subject] = score
        
//         }else{
//             total[id] = {
//                 totalScore: score,
//                 averageScore: score/count,
//                 subjects: {
//                     [subject]: score
//                 }
//             }

//         }
//     }
//     return total
// }

// console.log(summarizeScores([
//     { studentId: "A001", subject: "Math", score: 85 },
//     { studentId: "A001", subject: "English", score: 78 },
//     { studentId: "A002", subject: "Math", score: 92 },
//     { studentId: "A001", subject: "Science", score: 90 },
//     { studentId: "A002", subject: "English", score: 88 },
//     { studentId: "A003", subject: "Math", score: 75 }
//   ]))

// cylinder = {
//     radius: 2,
//     height: 5,
//     volume: function(){
//         return Math.PI * this.radius ** 2 * this.height
//     }
// }
// console.log(cylinder.volume().toFixed(4))

// function sorting(unsorted){
//     for(let i=0;i<unsorted.length-1;i++){
//         for(let j=0;j<unsorted.length-i-1;j++){
//             if(unsorted[j] > unsorted[j+1]){
//                 let x = unsorted[j]
//                 unsorted[j] = unsorted[j+1]
//                 unsorted[j+1] = x
//             }
//         }
//     }
//     return unsorted
// }

// console.log(sorting([6,4,0,3,-2,1]))


// function subset(str){
//     arr = []
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<=str.length;j++){
//             arr.push(str.slice(i, j))
//         }
//     }return arr
// }
// let string = "mouse" 
// console.log(subset(string))

// function myValue(){
//     var x = 5
//     console.log(x)
// }
// var x = 2
// console.log(x)
// myValue()
// console.log(x)


// function loader(setQty) {
//   let packQty = setQty;
//   let packCounter = 0;
//   while(packCounter != packQty){
//     userAdd = input.question(`1)Add an apple \n2)Display current number of apples:  `)
//     if(userAdd == "1"){
//       add()
//     }else if(userAdd == "2"){
//       display()
//     }
//     function add() {
//       packCounter ++
//       console.log(`1 apple added`)
      
//     }
//     function display(){
//       console.log(packCounter)
//     }
//   }
//   console.log(`Total of ${packCounter} added, exiting program.`)

// }
// start = input.question(`How many apples would you like to add?  `)
// loader(start)

// function printDashline(){
//   console.log(`//===================================`)
// }
// function printCompanyName(){
//   console.log(`\tAlibaba Pte Ltd`)

// }

// printDashline(), printCompanyName(), printDashline()

// const studName = "Jammy Lenner"
// const age = 19

// function displayStudentInfo(name, age){
//   console.log(`Former class leader ${name} is now ${age} years old.`)
// }

// displayStudentInfo(studName, age)

// const number1 = -1
// const number2 = " "

// function addNumbers(num1, num2){
//   result = num1 + num2
//   if(isNaN(result)){
//     return `Invalid input. Please provide only numeric values.`
//   }else{
//     return result
//   }
// }

// console.log(addNumbers(number1, number2))

// function sayHello(){
//   return "Hello, "
// }
// function greeting(helloMessage, name){
//   console.log(helloMessage() + name)
// }
// //pass sayHello as an argument to 'greeting' function
// greeting(sayHello, 'Javascript!') //sayHello is a callback function
// //Hello, Javascript!

// amend the codes to create 2 more staff
// kelly, 27 years old & lili 20 years old
// print all the staff name and their age
// you can also print all the properties of objects in table forms, console.table

// function Person(name, age) {
//     this.name = name,
//     this.age = age,
//     this.sayName = function (msg) {
//     console.log(msg);

//     console.log("Your age is " + this.age);
//     let msgToEnquiry = () => {
//     if (this.age < 18) {
//       console.log("You are not required to report to CMPB for enlistment");

//     } else {
//         console.log("You are required to report to CMPB for enlistment");

//     }
// }

//     msgToEnquiry();
// }
// }

// const jack = new Person('Jack', 25)
// const kelly = new Person('Kelly', 27)
// const lili = new Person('Lili', 20)

// jack.sayName("Check your age:")
// kelly.sayName("Check your age:")
// lili.sayName("Check your age:")

// const staffList = [jack, kelly, lili]
// console.table(staffList)

// function sortArr(arr){
//    return arr.sort(function (a,b){return a-b})
// }

// let sales = [12.3 , 43.5, 22.5, 11.5, 86.0 , 44.6, 32.6 ];
// let footfallCount = [ 12, 0, 10, 1, 5, 20, 40, 67, 22, 12] ;
// let dateJoin = ['July 2, 2020', 'January 10 2014', 'May 5, 2018'];

// console.log(sortArr(sales))
// console.log(sortArr(footfallCount))
// console.log(sortArr(dateJoin))

// let fruits = ["Apple", "Orange", "Pear", "Watermelon", "Pineapple", "Durian", "Avocado" ];

// // Print out all items in the fruits array
// fruits.forEach((element) => console.log(element))

// // Print the 4th element in the fruits array (Watermelon)
// console.log(fruits[3])

// // Change the element containing the string Pineapple” to Cherry”
// for(let i=0;i<fruits.length;i++){
//  if(fruits[i]=='Pineapple'){
//   fruits[i]='Cherry'
//  }
// }

// // Remove the last item in the fruits array
// fruits.pop()

// // Append a string containing Coconut” into the fruits array
// fruits.push('Coconut')

// // Print out all items in the fruits array again
// console.log(fruits)

// // Assign the elements containing Pear” and Watermelon” into a new array (name of array : fruits2)
// fruits2 = fruits.slice(2, 4)

// // Print the fruits2 array
// console.log(fruits2)

// // sort the array to new array (name of array : fruits_sorted)
// fruits_sorted = fruits.sort()

// // Print the fruits_sorted array
// console.log(fruits_sorted)
// stockPrices = [32.11, 22.12, 45.12, 31.20, 32.50, 44.12];

// const mappedStockPrices = stockPrices.map((x) =>  x*100)
// console.log(mappedStockPrices)

// let noOfCommuters = [5, 12, 40, 60, 50, 40, 15, 4, 23];

// const sum = noOfCommuters.reduce((x, y) => x+y)
// console.log(sum)
// let marks = [67, 80, 34, 40, 55, 70, 74, 80, 56, 47, 90, 50];

// let filteredMarks = marks.filter((x) => x<50)
// console.log(filteredMarks)
// const person = {
//     name: "Amit",
//     age: 30,
//     gender: "male"
//   };

// /* Code to print out the Output */
// console.log(person)

// let bookinfo = {
//     bookTitle : "JavaScript from Beginner to Professional",
//     author: {
//         firstName: "Laurence",
//         lastName: "Lars Svekis"
//     },

// getTitle : /* Write a function to return the book title */
// function(){
//  return this.bookTitle
// },
    
// getAuthorName: /* Write a function to return the first name and last name of author */
// function(){
//  return this.author.firstName, this.author.lastName
// }
// };

// /* Code to print out the Output */
// console.log(bookinfo.getTitle())
// console.log(bookinfo.getAuthorName())
// const student = { 
//     name: 'John',
//     "my age": 20,
//     "my hobbies": ['reading', 'games', 'coding'],
// "say Hi" : function() {
//   // complete the function to return the message as shown in the sample output
// return `I am ${this.name} and my age is ${this["my age"]}.`
// },
//     "subject score": {
//         maths: 90,
//         science: 80
//     }
// };

// /* Code to print out the Output */
// console.log(typeof student)
// console.log(student.name)
// console.log(student["say Hi"]())
// console.log(student["subject score"].maths)

// function student(){ 
//     this.name = 'John',
//     this.age = 20,
//     this.hobbies = ['reading', 'games', 'coding'],
//   this.sayHi = function() {
//   // complete the function to return the message as shown in the sample output
// return `I am ${this.name} and my age is ${this.age}.`
// },
//     this.subjectScore = {
//         maths: 90,
//         science: 80
//     }
// };
// const newStudent = new student()
// console.log(typeof newStudent)
// console.log(newStudent.name)
// console.log(newStudent.sayHi())
// console.log(newStudent.subjectScore.maths)

// phoneContact = {
//     ChongCS: "68704888",
//     TanKB: "68705888",
//     LimHT: "68704228",
//     LeeJane: "68702008",
// }
// const myPhoneBook = new Map(Object.entries(phoneContact))
// console.log(myPhoneBook)
// myPhoneBook.forEach((number)=>{
//     console.log(number)
// })
// console.log(myPhoneBook.get("ChongCS"))
// if(myPhoneBook.get("LimHT")){
//     console.log(true)
// }else console.log(false)
// myPhoneBook.delete('LimHT')
// myPhoneBook.forEach((number)=> console.log(number))

<<<<<<< HEAD
// function checkMonth(userInput){
//     let months = {
//         "1": "January",
//         "2": "February",
//         "3": "March",
//         "4": "April",
//         "5": "May",
//         "6": "June",
//         "7": "July",
//         "8": "August",
//         "9": "September",
//         "10": "October",
//         "11": "November",
//         "12": "December"
//     }

//     return months[userInput]
// }
// console.log(checkMonth(1))
// function boilWater(temperature) {

//     return new Promise((resolve, reject) => {

//         console.log(`Checking water temperature: ${temperature}°C`);
//         if (temperature >= 100) {
//             resolve("Water is boiled. Ready to make tea!");
// } else {
//             reject("Water is not hot enough.");
// }
//     });
// }

// // Test case 1: Temperature = 100​

// boilWater(100)
//     .then(message => console.log(message))
//     .catch(error => console.log(error));

// // Test case 2: Temperature = 80​
// boilWater(80)
//     .then(message => console.log(message))
//     .catch(error => console.log(error));

=======
let share_price_01102023 = [12.3, 11.2, 10.8, 10.5, 11.5, 12.50, 9.50, 11.55];
let share_price_02102023 = [10.3, 9.2, 9.2, 8.3, 9.5, 11.10, 9.90, 10.25];

let shared_traded = [2200, 1200, 300];

let accountHolder ={
    "accountname" : "Lionel Chua",
    "mobileNumber" : "99009911",
    "accountNum" : "49200012",
}

let received_msg = "You won 100 points" ;

let copy_share_price = [...share_price_01102023]
let combined_share_price = [...share_price_01102023, ...share_price_02102023]
share_price_01102023.push(12.33)
accountHolder.tradingcredit = 200000

let highestNum = share_price_01102023[0]
let lowestNum = share_price_01102023[0]
let highestNum2 = share_price_02102023[0]
let lowestNum2 = share_price_02102023[0]

for(let i=1;i<share_price_01102023.length;i++){
    if(share_price_01102023[i] > highestNum){
        highestNum = share_price_01102023[i]
        
    } else if(share_price_01102023[i] < lowestNum){
        lowestNum = share_price_01102023[i]
    }
}
for(let j=1;j<share_price_02102023.length;j++){
    if(share_price_02102023[j] > highestNum2){
        highestNum2 = share_price_02102023[j]
        
    } else if(share_price_02102023[j] < lowestNum2){
        lowestNum2 = share_price_02102023[j]
    }
}

function sumAll(...value){
    let total = 0
    value.forEach(element => {
        total += element
    })
    return total
}

function averagePrice(total, count){
    return total/count
}
totalShared = sumAll(combined_share_price)

total1 = sumAll(...share_price_01102023)
total2 = sumAll(...share_price_02102023)
average1 = averagePrice(total1, share_price_01102023.length)
average2 = averagePrice(total2, share_price_02102023.length)

console.log(sumAll(...shared_traded))
console.log(total1, total2)
console.log(accountHolder.accountname, accountHolder.mobileNumber)
let explodedMessage = [...received_msg]
console.log(explodedMessage)
>>>>>>> 6096780b3e2e8e17fe55d401e08a3c7bc91d247b
