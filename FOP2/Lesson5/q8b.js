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
