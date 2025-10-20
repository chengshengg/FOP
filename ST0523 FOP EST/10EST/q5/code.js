function getStringArray(mixArray) {
    arr = []
    for(let i=0;i<mixArray.length;i++){
        if(typeof(mixArray[i]) === typeof("a")){
            arr.push(mixArray[i])
        }
    }
    return arr
}

console.log(getStringArray(['ABC', true, 34, 'Hello', undefined, 61, 'DEF', '90'])); // [ 'ABC', 'Hello', 'DEF', '90' ]

module.exports = getStringArray;
