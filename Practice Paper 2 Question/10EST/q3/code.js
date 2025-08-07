function averageOfMultiplesOfFive(numArray) {
    count = 0
    sum = 0
    for(i=0;i<numArray.length;i++){
        if(numArray[i]%5==0){
            sum += numArray[i]
            count++
        }
    }
    return sum/count
}

console.log(averageOfMultiplesOfFive([12, 15, 20, 7, 55, 3])); // 30

module.exports = averageOfMultiplesOfFive;
