function calculateRewards(trainingLog) {
    // let reward = 0
    // let currentStart = null;
    // let currentLength = 0
    // let fail = 0

    // for (let i = 0; i < trainingLog.length; i++) {
    //     if (trainingLog[i] == 'Reward') {
    //         if (currentStart == null) {
    //             currentLength ++; // Start of a new reward-sequence
    //             reward ++
    //             currentStart = 1
    //         } 
            
    //         // Check if this is the end or last element
    //         if (i == trainingLog.length - 1 || trainingLog[i + 1] == 'Nil') {
    //             if (currentLength == 3) {
    //                 reward += 5
    //             }

    //             currentStart = null;
    //             currentLength = 0
    //             // reset for next sequence
    //         } 
    //         else {
    //             currentLength ++
    //             reward ++
    //         }

    //     } else {
    //         fail ++
    //     }
    // }
    // return reward
    let fish = 0
    for(i=0;i<trainingLog.length;i++){
        if (trainingLog[i] == 'Nil' && trainingLog[i+1] == 'Nil' && trainingLog[i+2] == 'Nil' && trainingLog[i+3] == 'Nil' 
            && trainingLog[i+4] == 'Nil'
        ) {
            return 0
        }
        if (trainingLog[i] == "Reward" && trainingLog[i+1] == 'Reward' && trainingLog[i+2] == 'Reward') {
            fish += 5
        }
        if (trainingLog[i] == "Reward") {
            fish += 1
        }
    }return fish
}



// Your own test cases
// e.g.;

console.log(calculateRewards(['Reward', 'Nil', 'Reward', 'Reward', 'Nil', 'Reward', 'Reward', 'Reward', 'Nil', 'Nil']));

module.exports = calculateRewards;
