/* 
Closure
Christmas is around the corner, Jennifer Lim is happily creating a shopping list for her family members and relative. The following is the data store shopping list.
Write a function name myGifts() with closure inside it.

The following are the required functions:
•	add items
•	delete items
•	greeting message 
•	update greeting message
*/

gifts = [
    {
        id: 0,
        name: 'John',
        relation: 'Brother',
        gift: 'jersey',
        greeting: 'Running Christmas'
    },
    {
        id: 1,
        name: 'Candice',
        relation: 'Sister',
        gift: 'portable fan',
        greeting: 'Breeze Christmas'
    },
    {
        id: 2,
        name: 'Fat Daddy',
        relation: 'Father',
        gift: 'T-Shirt',
        greeting: 'Fitting Christmas'
    },
    {
        id: 3,
        name: 'Love Mommy',
        relation: 'Mother',
        gift: 'grinder',
        greeting: 'Delicious Christmas'
    },
    {
        id: 4,
        name: 'Christina',
        relation: 'Aunt',
        gift: 'Sling Bags',
        greeting: 'Joyous Christmas'
    },

];

function myGifts(itemList){
    function addItems(item){
        itemList.push(item)
    }
    function deleteItems(id){
        itemList = itemList.filter(g => g.id != id)
    }
    function greeting(id){
        const gift = itemList.find(g => g.id == id)
        return gift ? gift.greeting : null   
        /*
        if (gift) {
            return gift.greeting;
        } else {
            return null;
        }*/
    }
    function updateGreeting(){
        const gift = itemList.find(g => g.id === id);
        if (gift) gift.greeting = newGreeting;
    }
    return {
        addItems,
        deleteItems,
        greeting,
        updateGreeting
    }
}
const controller = myGifts(gifts);

// Add a new gift
controller.addItems({
    id: 5,
    name: "Banana Uncle",
    relation: "Uncle",
    gift: "Banana",
    greeting: "Fruitful Christmas"
});
console.log(controller.greeting(1))
