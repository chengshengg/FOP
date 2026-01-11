const input = require("readline-sync")
let count = 0
function counter(callback){
    console.log("Starting to count Visitor.")

    do{
        let click = input.question("Click to increment count")
        count ++

        console.log(`Counter value ${count}`)
    }while(count<10)
    
    callback()
}

function counterComplete(){
    console.log('Number count is' + count)
    console.log('Count complete')
}
counter(counterComplete)

