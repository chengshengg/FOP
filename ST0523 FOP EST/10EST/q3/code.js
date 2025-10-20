function checkFahrenheitTemp(celsius) {
    let fahrenheit = celsius * 9/5 +32
    if(fahrenheit<=32){
        return "freezing"
    }else if(fahrenheit<=122){
        return "cooling"
    }else if(fahrenheit<= 211){
        return "warm"
    }else{
        return "boiling"
    }
}

console.log(checkFahrenheitTemp(25)); // cooling

module.exports = checkFahrenheitTemp;
