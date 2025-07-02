function shiftLeft(arr, n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < arr.length; j++) {
            temp.push(arr[j]);
        }
        temp.push(arr[0]);
        arr = temp;
        temp = [];
    }
    return arr;
}

// Your own test cases
// e.g.;

console.log(shiftLeft([1, 2, 3, 4], 1)); // [2, 3, 4, 1]

module.exports = shiftLeft;
