function calculateParkingFees(hour) {   
    let timing = 0
    let sum = 0
    while(timing != hour){
        if(timing<3){
            sum += 1*2
            timing ++
        }else if(timing<6){
            sum += 1*1.5
            timing ++
        }else if(timing>=6){
            sum += 1
            timing ++
        }
    }
    return sum
}

console.log(calculateParkingFees(2)); // 4

module.exports = calculateParkingFees;
