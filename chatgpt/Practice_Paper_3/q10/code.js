// Complete the function getTopSellingCategory which:

//     Has one parameter:

//         sales: An array of objects, each with:

//             category: string

//             quantity: number

//     Returns the category with the highest total quantity sold.
function getTopSellingCategory(sales) {
    result = {}
    for(let i=0;i<sales.length;i++){
        let sale = sales[i]
        if(result[sale.category] == undefined){
            result[sale.category] = sale.quantity
        }else{
            result[sale.category] += sale.quantity
        }
    }
    let qty = 0
    let highest = null
    for(let x in result){
        if(result[x]>qty){
            qty = result[x]
            highest = x
        }
    }
    return highest
}

console.log(getTopSellingCategory([
    { category: "toys", quantity: 5 },
    { category: "books", quantity: 10 },
    { category: "toys", quantity: 8 }
  ]));
//   Returns "toys")
