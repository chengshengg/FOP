let r1 = {
    length: 1,
    width: 5
}
let r2 = {
    length: 2,
    width: 5
}
let r3 = {
    length: 3,
    width: 5
}
let r4 = {
    length: 4,
    width: 5
}
let rectArray = [r1, r2, r3, r4]

function getBiggestlength(arr){
    biggest = 0
    for(i=0;i<arr.length;i++){
        if(arr[i].length > biggest){
            biggest = arr[i].length
        }
    }
    return biggest
}

function getBiggest(arr){
    biggestLength = 0
    biggestObj = null
    for(i=0;i<arr.length;i++){
        if(arr[i].length > biggestLength){
            biggestLength = arr[i].length
            biggestObj = arr[i]
        }
    }
    return biggestLength, biggestObj
}

console.log(getBiggestlength(rectArray))
console.log(getBiggest(rectArray))
// console.log(rectArray)

// for(i=0;i<rectArray.length;i++){
//     console.log(`r${i+1} ${rectArray[i].length} length ${rectArray[i].width} width`)
// }

// function calculateRectangleArea(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i].length * arr[i].width)
//     }
// }
// calculateRectangleArea(rectArray)