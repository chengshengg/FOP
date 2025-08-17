function getTopAchiever(studentArray) {
    let best = null
    let highest = 0
    
    for(i=0;i<studentArray.length;i++){
        let count = 0
        for(j=0;j<studentArray[i].scoreArray.length;j++){
            if(studentArray[i].scoreArray[j]>=studentArray[i].target){
                count++
                
            }
        }
        if(count>highest){
            highest = count
            let best = studentArray[i].name

        }
    }return best
}

console.log(
    getTopAchiever([
        { name: 'Alice', target: 70, scoreArray: [72, 80] },
        { name: 'Bob', target: 85, scoreArray: [88, 85, 90, 87] },
        { name: 'Charlie', target: 65, scoreArray: [55, 64, 70, 50] },
    ]),
); // Bob


module.exports = getTopAchiever;
