function countMultiples(start, end, num) {
    count = 0
    for(i=start;i<end+1;i++){
        if(i%num==0){
            count++
        }
    }
    return count
}

console.log(countMultiples(5, 14, 3)); // 3

module.exports = countMultiples;
