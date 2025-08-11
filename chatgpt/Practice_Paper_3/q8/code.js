// Complete the function getTopSpender which:

//     Has one parameter:

//         customers: An array of objects, each with:

//             name: string

//             transactions: array of numbers representing spending amounts

//     Returns the name of the customer who spent the most in total.
function getTopSpender(customers) {
    let highest = 0
    let who = null
    for(let i=0;i<customers.length;i++){
        let customer = customers[i]
        let total = 0
        
        for(let j=0;j<customer.transactions.length;j++){
            total += customer.transactions[j]
        }
        if(total>highest){
            highest = total
            who = customer.name
        }
    }
    return who
}

console.log(getTopSpender([
    { name: "Amy", transactions: [50, 100] },
    { name: "John", transactions: [200] }
  ]));
//   Returns "John"
