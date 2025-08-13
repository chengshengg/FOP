// Complete the function getCategoryWiseTotals which:

//     Has one parameter:

//         items: An array of objects, each with:

//             category: A string representing the item’s category

//             price: A number representing the item’s price

//     Returns an object where each key is a category and its value is the total price of all items in that category.
function getCategoryWiseTotals(items) {
    let result = {}
    for(let i=0;i<items.length;i++){
        let item = items[i]
        let category = item.category
        
        if(result[category] == undefined){ // or if(!(category in result))
            result[category] = item.price
        }else{
            result[category] += item.price
        }
    }
    return result
}

console.log(getCategoryWiseTotals([
    { category: "fruit", price: 5 },
    { category: "veg", price: 3 },
    { category: "fruit", price: 2 }
  ]));
//   Returns { fruit: 7, veg: 3 })
