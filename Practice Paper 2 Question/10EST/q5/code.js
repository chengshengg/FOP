function isSameDataType(value1, value2) {
    if(typeof(value1)==typeof(value2)){
        return "same"
    }else{
        return "not same"
    }
}

console.log(isSameDataType(42, 'hello')); // not same

module.exports = isSameDataType;
