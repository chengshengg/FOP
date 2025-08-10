// getGradeCategory

// Complete the function getGradeCategory which:

//     Has one parameter:

//         score: a number between 0 and 100

//     Returns:

//         "A" if score is 80–100

//         "B" if 70–79

//         "C" if 60–69

//         "D" if 50–59

//         "F" if below 50.

// Sample 1

// Input: getGradeCategory(72);
// Returns: "B"

function getGradeCategory(score){
    if(score>=80){
        return "A"
    }else if(score>=70){
        return "B"
    }else if(score>=60){
        return "C"
    }else if(score>=50){
        return "D"
    }else{
        return "F"
    }
}

console.log(getGradeCategory(72))