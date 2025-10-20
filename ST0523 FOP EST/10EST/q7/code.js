function getMostCommonLetter(letterArray) {
    let sumA = 0
    let sumB = 0
    let sumC = 0
    let sumD = 0
    for(let i=0;i<letterArray.length;i++){
        if(letterArray[i] == "A"){
            sumA ++
        }else if(letterArray[i] == "B"){
            sumB++
        }else if(letterArray[i] == "C"){
            sumC++
        }else{
            sumD++
        }
    }
    if(sumA>sumB && sumA>sumC && sumA>sumD){
        return "A"
    }else if(sumB>sumA && sumB>sumC && sumB>sumD){
        return "B"
    }else if(sumC>sumA && sumC>sumB && sumC>sumD){
        return "C"
    }else{
        return "D"
    }

}

console.log(getMostCommonLetter(['D', 'C', 'A', 'D', 'A', 'C', 'A', 'A', 'B', 'D'])); // A

module.exports = getMostCommonLetter;
