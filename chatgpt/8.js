// getMostExpensiveProduct

// Complete the function getMostExpensiveProduct which:

//     Has one parameter:

//         products: an array of objects, each with:

//             name: string

//             price: number

//     Return the object with the highest price.

//     Assume no ties.

// Sample 1

// Input: getMostExpensiveProduct([
//   { name: "Phone", price: 1200 },
//   { name: "Tablet", price: 800 },
//   { name: "Laptop", price: 1500 }
// ]);
// Returns: { name: "Laptop", price: 1500 }

function getMostExpensiveProduct(products){
    let highest = products[0]
    for(let i=1;i<products.length;i++){
        let product = products[i]
        if(product.price>highest.price){
            highest = product
        }
    }
    return highest
}

console.log(getMostExpensiveProduct([
      { name: "Phone", price: 1200 },
      { name: "Tablet", price: 800 },
      { name: "Laptop", price: 1500 }
    ]))