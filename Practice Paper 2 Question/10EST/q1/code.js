function addSize(circle) {
    let area = circle.radius**2*Math.PI
    
    if(area>100){
        circle.size = "big"
    }else{
        circle.size = "small"
    }
    return circle
}

console.log(addSize({ radius: 6 })); // { radius: 6, size: "big" }

module.exports = addSize;