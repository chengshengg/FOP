// Complete the function getPlayerWithMostGoals which:

//     Has one parameter:

//         players: An array of objects, each with:

//             name: A string representing the player's name

//             goals: An array of numbers representing goals scored in each match

//     Returns the object of the player with the highest total goals.

function getPlayerWithMostGoals(players) {
    let highest = 0
    let who = null

    for(let i=0;i<players.length;i++){
        let sum = 0
        let player = players[i]
        
        for(let j=0;j<player.goals.length;j++){
            sum += player.goals[j]
        }
        if(sum>highest){
            highest = sum
            who = player
        }
    }
    return who
}

console.log(getPlayerWithMostGoals([
    { name: "Leo", goals: [2, 1, 0, 3] },
    { name: "Ronaldo", goals: [1, 2, 2] }
  ]));
//   Returns { name: "Leo", goals: [2, 1, 0, 3] })