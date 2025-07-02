function shiftLeft(arr, n) {
    newArray = []
    for (i=0; i<n; i++) {
        for(j=1; j<arr.length; j++) {
            newArray.push(arr[j])
        }
        newArray.push(arr[0]) 
        arr = newArray
        newArray = []
    } return arr
}

// Your own test cases
// e.g.;

console.log(shiftLeft([1, 2, 3, 4], 1)); // [2, 3, 4, 1]

module.exports = shiftLeft;
