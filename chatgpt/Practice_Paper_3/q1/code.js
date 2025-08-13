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
    let highest = 0
    let who = null
    for(let i=0;i<studentArray.length;i++){
        let student = studentArray[i]
        let sum = 0
        
        for(let j=0;j<student.scores.length;j++){
            sum += student.scores[j]
        }
        let avg = sum/student.scores.length
        if(avg>highest){
            highest = avg
            who = student.name
        }
    }
    return who
}

console.log(getHighestAverageScore([
  { name: "Aiden", scores: [80, 90, 85] },
  { name: "Bella", scores: [88, 92, 100] },
  { name: "Chris", scores: [70, 75, 78] }
]));
// Returns "Bella"
