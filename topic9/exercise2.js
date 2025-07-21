let circleArray = []
let r = 2
// let circle = createCircle(r)
// circleArray.push(circle)
// console.log(circleArray)
// console.log(circleArray.length)

function createCircle(radius){
    return circleRadius = {
        r: radius
    }
}

let multiplier = 2
for(i=1;i<=5;i++){
    let radius = i * multiplier
    let circle = createCircle(radius)
    circleArray.push(circle)
}
console.log(circleArray)

function calculateCircleAreas(obj){
    sum = 0
    for(i=0;i<obj.length;i++){
        area = (Math.PI*obj[i].r**2)
        console.log(area)
        sum += area
    }
    return sum
}
console.log(calculateCircleAreas(circleArray).toFixed(2))