// Complete the function getHighestAverageScore which:

//     Has one parameter:

//         studentArray: An array of objects, where each object has:

//             name: A string representing the student's name

//             scores: An array of numbers representing scores obtained in various tests

//     Returns the name of the student with the highest average score.

//     You may assume the following:

//         There are at least 2 students

//         No two students will have the same average score

function getHighestAverageScore(studentArray) {
    for(let i=0;i<studentArray.length;i++){
        let student = studentArray[i]
        let sum = 0
        
        for(let j=0;j<student.scores.length;j++){
            sum += student.scores[j]
        }
        student.avg = sum/student.scores.length
    }
    for(let k=1;k<studentArray.length;k++){
        let student = studentArray[k]
        let highest = studentArray[0]
        if(student.avg > highest.avg){
            highest = student
        }
        return highest.name
    }
}

console.log(getHighestAverageScore([
  { name: "Aiden", scores: [80, 90, 85] },
  { name: "Bella", scores: [88, 92, 100] },
  { name: "Chris", scores: [70, 75, 78] }
]));
// Returns "Bella"
