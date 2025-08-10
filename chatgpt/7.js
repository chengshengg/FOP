// calculateTaxiFare

// Complete the function calculateTaxiFare which:

//     Has one parameter:

//         distance: a number representing kilometers travelled

//     Returns:

//         If distance ≤ 5 km → $5 flat

//         If distance > 5 km → $5 + ($1.5 × (distance - 5)).

// Sample 1

// Input: calculateTaxiFare(8);
// Returns: 9.5

function calculateTaxiFare(distance){
    if(distance<=5){
        return distance*5
    }else{
        return 5 + (1.5 * (distance - 5))
    }
}

console.log(calculateTaxiFare(8))