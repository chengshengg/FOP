function getRainFallCategory(rainFall) {
    if(rainFall<50){
        return "light"
    }
    else if(rainFall>=50 && rainFall<=100){
        return "moderate"
    }
    else {
        return "heavy"
    }
}

console.log(getRainFallCategory(120)); // heavy

module.exports = getRainFallCategory;
