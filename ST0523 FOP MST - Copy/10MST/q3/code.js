function canBeWinner(ticketNumber) {
    // DO NOT EDIT
    // Use this to find the nth ticket that fulfills the winning criteria.
    if (ticketNumber === 0) return false;
    if (ticketNumber < 200) return false;
    if (ticketNumber < 1000) return ticketNumber % 13 === 0;
    let x = ticketNumber % Math.pow(10, Math.floor(Math.log10(ticketNumber)));
    let y = Math.floor(ticketNumber / 10);
    const result = canBeWinner(x) || canBeWinner(y) || ticketNumber % 17 === 0;
    return result;
}

function findWinner(firstTicketNumber, lastTicketNumber, n) {
    // arr = []
    // for (i=firstTicketNumber; i<lastTicketNumber+1; i++) {
    //     if (canBeWinner(i)) {
    //         arr.push(i)
    //     } else {
    //         continue
    //     }
    // }
    // if (arr.length>=n) {
    //     return arr[n-1]
    // }
    // else {
    //     return -1
    // }
    let count=0
    for(i=firstTicketNumber; i<= lastTicketNumber; i++) {
        if (canBeWinner(i)) {
            count++
        } 
        if (count ==n){
            return i
        }
    }
    return -1
}



// Your own test cases
// e.g.;

console.log(findWinner(29387, 29393, 1)); // 4

module.exports = findWinner;
