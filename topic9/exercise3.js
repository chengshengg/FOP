sqArray = [] //store square objects

for(i=0;i<10;i++){
    sqArray.push(Math.floor(Math.random()*11) + 10)
}

function calculateArea(arr){
    result = []
    for(i=0;i<arr.length;i++){
        result.push(arr[i]*arr[i])
    }
    return result
}
console.log("length: " + sqArray)
console.log("area: " + calculateArea(sqArray))
