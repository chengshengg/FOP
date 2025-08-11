// Complete the function mergeInventory which:

//     Has two parameters:

//         inv1 and inv2: Arrays of objects, each with:

//             item: string

//             qty: number

//     Merges the two inventories by adding quantities for the same item.

//     Returns a new merged array sorted by item name (A–Z).
function mergeInventory(inv1, inv2) {
    result = []
    for(let i=0;i<inv1.length;i++){
        let now = inv1[i]
        if(result[now.item] == undefined){
            result["item"] = now.item
        }else{
            result["item"]
        }
    }
    return result
}

console.log( mergeInventory(
    [{ item: "apple", qty: 5 }, { item: "banana", qty: 3 }],
    [{ item: "banana", qty: 2 }, { item: "orange", qty: 7 }]
  ));
//   Returns [
//     { item: "apple", qty: 5 },
//     { item: "banana", qty: 5 },
//     { item: "orange", qty: 7 }
//   ])