let result = function (score) {
    return new Promise(function (resolve, reject) {
        console.log("Gathering results...");
        if (score > 50)
            resolve("Congratulations! You have Passed")
        else
            reject("You have failed")
    })
}
let grade = function (response) {
    return new Promise(function (resolve, reject) {
        console.log("Calculating your grade..");
        resolve("Your grade is A. " + response)
    })
}

// Using Promises
// result(40)
//     .then(response => {
//         console.log("Results received");
//         return grade(response)
//     })
//     .then(finalgrade => {
//         console.log("Final Grade");
//         console.log(finalgrade)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Using Async and Await
async function calculateResults() {
    try {
        const response = await result(80)
        console.log("Results received")
        const finalgrade = await grade(response)
        console.log(finalgrade)
    }
    catch (err) {
        console.log(err)
    }
}

calculateResults()   
