/* 
    Question 5
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

// Seed Data -------------------------------------------------
const studentClasses = [
  {
    className: "DIT 1C013",
    students: [
      { id: "S101", name: "Amy Tan", attendance: 95 },
      { id: "S102", name: "John Lee", attendance: 80 },
      { id: "S103", name: "Nur Izzah", attendance: 88 },
      { id: "S104", name: "Kelvin Ong", attendance: 92 },
      { id: "S105", name: "Rachel Lim", attendance: 77 },
      { id: "S106", name: "Chloe Koh", attendance: 83 },
      { id: "S107", name: "Syafiq Hamid", attendance: 97 },
    ],
  },
  {
    className: "DIT 1D014",
    students: [
      { id: "S201", name: "Marcus Chia", attendance: 91 },
      { id: "S202", name: "Priya Nair", attendance: 84 },
      { id: "S203", name: "Daniel Wong", attendance: 76 },
      { id: "S204", name: "Zara Lim", attendance: 89 },
      { id: "S205", name: "Benjamin Tan", attendance: 94 },
      { id: "S206", name: "Wong Hui Ling", attendance: 72 },
    ],
  },
  {
    className: "DIT 1F015",
    students: [
      { id: "S301", name: "Adrian Goh", attendance: 90 },
      { id: "S302", name: "Mei Xiang", attendance: 85 },
      { id: "S303", name: "Justin Ng", attendance: 78 },
      { id: "S304", name: "Elaine Lee", attendance: 88 },
      { id: "S305", name: "Tan Jia Hao", attendance: 82 },
      { id: "S306", name: "Nurul Aisyah", attendance: 96 },
      { id: "S307", name: "Chen Rui", attendance: 93 },
      { id: "S308", name: "Kumar Raj", attendance: 65 },
    ],
  },
];

// Complete the Function 1: getAttendanceBelow --------------------------
function getAttendanceBelow(givenClass, givenPercent) {
/* TODO: Add code here */
  let attendanceMap = new Map()
  
  for(let i=0;i<givenClass.length;i++){
    let arrStudents = []
    let current = givenClass[i].students

    for(let j=0;j<current.length;j++){
      if(current[j].attendance<givenPercent){
        arrStudents.push(current[j].name)
        
      }
      attendanceMap.set(givenClass[i].className, arrStudents)
    }
    
  }
  return attendanceMap
}

// Complete the Function 2: lowestClassAverage --------------------------
function lowestClassAverage(givenClass) {
/* TODO: Add code here */
  let arr = []
  for(let i=0;i<givenClass.length;i++){
    let avgAttendance = {}
    let counter = 0
    current = givenClass[i].students

  for(let j=0;j<current.length;j++){
    counter += current[j].attendance

    }
    result = counter/current.length
    avgAttendance.className = givenClass[i].className
    avgAttendance.averageAttendance = result
    arr.push(avgAttendance)
  }
  let lowest = arr[0].averageAttendance
  let whichClass = arr[0]
  for(let k=1;k<arr.length;k++){
    if(arr[k].averageAttendance<lowest){
      lowest = arr[k].averageAttendance
      whichClass = arr[k]
      
    }
    return(whichClasss)
  }
}

// Complete the Function 3: displayMapClasses ---------------------------
function displayMapClasses(mapClasses) {
/* TODO: Add code here */
  return mapClasses.forEach((e) => console.log(e))
}

// Testing Case Section --------------------------------------------
console.clear();
// Test displayMapClasses()
// Convert studentClasses to Map  
const classMap = new Map(
  studentClasses.map(cls => [cls.className, cls.students])
);

console.log("=== All Class List ===");
displayMapClasses(classMap);

// Test getAttendanceBelow()
console.log("=== Students with Attendance Below 85% ===");
const below85 = getAttendanceBelow(studentClasses, 85);

console.log(below85);
//displayMapClasses(below85);

// Test lowestClassAverage()
console.log("\n=== Class with Lowest Average Attendance ===");
const lowestAvg = lowestClassAverage(studentClasses);
console.log(`The class with the lowest attendance is ${lowestAvg.className} at ${lowestAvg.averageAttendance}%`);
