function getTrafficCategory(humanCount) {
    if(humanCount<=20){
        return "very low"
    }else if(humanCount<=50){
        return "low"
    }else if(humanCount<=100){
        return "moderate"
    }else if(humanCount<=200){
        return "high"
    }else{
        return "very high"
    }
}

console.log(getTrafficCategory(120)); // high

module.exports = getTrafficCategory;
