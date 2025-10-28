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