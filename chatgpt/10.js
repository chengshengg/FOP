// totalMarksOfPassedStudents

// Complete the function totalMarksOfPassedStudents which:

//     Has one parameter:

//         students: an array of objects, each with:

//             name: string

//             marks: number

//     Return the sum of marks of students who scored 50 or more.

// Sample 1

// Input: totalMarksOfPassedStudents([
//   { name: "Ali", marks: 45 },
//   { name: "Ben", marks: 78 },
//   { name: "Cindy", marks: 50 }
// ]);
// Returns: 128

function totalMarksOfPassedStudents(students){
    let sum = 0
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=50){
            sum += students[i].marks
        }
    }
    return sum
}

console.log(totalMarksOfPassedStudents([
      { name: "Ali", marks: 45 },
      { name: "Ben", marks: 78 },
      { name: "Cindy", marks: 50 }
    ]))