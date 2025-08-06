function getPaid(hourWorked) {
    if(hourWorked<40){
        return 10.5*hourWorked
    }else{
        return 22.5*hourWorked
    }
}

console.log(getPaid(35)); // 367.5

module.exports = getPaid;
