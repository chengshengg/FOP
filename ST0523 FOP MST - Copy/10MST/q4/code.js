function checkFreeAdmission(X, visitorAge) {
    let x_str = "" + X
    let visitorAge_str = "" + visitorAge

    for(i=0;i<visitorAge_str.length;i++){
        for(j=0;j<x_str.length;j++){
            if (visitorAge_str[i] == x_str[j]){
                return true
            }
        }
    } return false
}

// Your own test cases
// e.g.;

console.log(test(3, [12, 13, 21, 33, 18, 23, 31, 32, 33]));

module.exports = test;

function test(n,k){
        digitK = k + ''
        digitN = n + ''
        for(i=0;i<digitN.length;i++){
            if(digitK.includes(digitN[i])){
                return true
            }
        }
    
    return false
}