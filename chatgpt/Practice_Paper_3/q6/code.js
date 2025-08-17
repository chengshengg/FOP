// Complete the function filterHighPerformers which:

//     Has two parameters:

//         students: An array of objects, each with:

//             name: string

//             scores: array of numbers

//         minAverage: number

//     Returns an array of names of students whose average score is greater than or equal to minAverage.
function filterHighPerformers(students, minAverage) {
    let result = []
    for(let i=0;i<students.length;i++){
        let student = students[i]
        let score = student.scores
        let sum = 0
        for(let j=0;j<score.length;j++){
            sum += score[j]
        }
        let avg = sum/score.length
        if(avg > minAverage){
            result.push(student.name)
        }
    }
    
    return result
}

console.log(filterHighPerformers([
    { name: "Ali", scores: [90, 95] },
    { name: "Ben", scores: [70, 75] }
  ], 85));
//   Returns ["Ali"])
