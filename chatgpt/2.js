// cheapestFruit

// Complete the function cheapestFruit which:

//     Has three parameters: fruit1, fruit2, fruit3, each an object with:

//         name: string

//         price: number

//     Return the name of the fruit with the lowest price.

//     Assume all prices are different.

// Sample 1

// Input: cheapestFruit(
//   { name: "Apple", price: 3 },
//   { name: "Orange", price: 2 },
//   { name: "Banana", price: 4 }
// );
// Returns: "Orange"

function cheapestFruit(fruit1, fruit2, fruit3){
    if(fruit1.price<fruit2.price && fruit1.price<fruit3.price){
        return fruit1.name
    }else if(fruit2.price<fruit1.price && fruit2.price<fruit3.price){
        return fruit2.name
    }else{
        return fruit3.name
    }
}

console.log(cheapestFruit(
    { name: "Apple", price: 3 },
    { name: "Orange", price: 2 },
    { name: "Banana", price: 4 }
  ))
// "Orange"