/*
You are given a Map called myMap, where:
- Keys = fruit names
- Values = an array of objects
- Each object represents a store and the quantity of the fruit in that store
Example:
"apple" → [ { store: "A", qty: 5 }, { store: "B", qty: 5 }, { store: "D", qty: 5 } ]

Your task is to write two functions that work with this Map:
1. displayTotalFruit(storeMap)
2. whatsInStore(storeName, storeMap)
You will complete these function bodies using the starter code provided in Section B.

Task 1 — Complete displayTotalFruit(storeMap)
Write code that:
1. Loops through the Map using .forEach()
2. For each fruit, sum up the quantities stored in all stores
3. Print a message in this format:
there are <no. of fruits> <fruit> in total
e.g.
there are 15 apple in total

Write code that:
1. Prints a heading such as: Store <store name> has:
2. Loops through the Map with .forEach()
3. For each fruit, check whether the storeName exists in the list
4. If found, print the quantity in the format:

<no. of fruits> <fruit>(s)
e.g.
4 pear(s)

Expected Program Output:
there are 15 apple in total
there are 6 pear in total
there are 12 orange in total

Store C has:
4 pear(s)
1 orange(s)
*/

console.clear();

const myMap = new Map(); // create an empty Map object

myMap.set("apple", [
{ store: "A", qty: 5 },
{ store: "B", qty: 5 },
{ store: "D", qty: 5 },
]);
myMap.set("pear", [
{ store: "B", qty: 2 },
{ store: "C", qty: 4 },
]);
myMap.set("orange", [
{ store: "A", qty: 5 },
{ store: "C", qty: 1 },
{ store: "F", qty: 5 },
{ store: "G", qty: 1 },
]);


function displayTotalFruit(storeMap) {
// Complete this function
    storeMap.forEach((value, key) => {
        const totalQty = value.reduce((sum, storeObj) => sum + storeObj.qty, 0)
        console.log(`There are ${totalQty} ${key} in total.`)
    })
}   


function whatsInStore(storeName, storeMap) {
// Complete this function
    storeMap.forEach((stores, fruit) => {   // value, key => [], "fruit"
        const resultStore = stores.filter(element => element.store == storeName)
        if (resultStore.length == 1){
            console.log(`${resultStore[0].qty} ${fruit}`)
        }
    })

}

displayTotalFruit(myMap);
console.log();
whatsInStore('C', myMap);