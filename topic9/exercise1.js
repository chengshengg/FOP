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
console.log(rectArray)

for(i=0;i<rectArray.length;i++){
    console.log(`r${i+1} ${rectArray[i].length} length ${rectArray[i].width} width`)
}

function calculateRectangleArea(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i].length * arr[i].width)
    }
}
calculateRectangleArea(rectArray)