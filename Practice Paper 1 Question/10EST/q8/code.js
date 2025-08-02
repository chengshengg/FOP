function countOddEven(numberArray) {
    count = 0
    if(numberArray.length%2==0){
        for(i=0;i<numberArray.length;i++){
            if(numberArray[i]%2==0){
                count++
            }
        }
    }else {
        for(j=0;j<numberArray.length;j++){
            if(numberArray[j]%2!=0){
                count++
            }
        }
    }
    return count
}

console.log(countOddEven([1, 6, 3])); // 2

module.exports = countOddEven;
