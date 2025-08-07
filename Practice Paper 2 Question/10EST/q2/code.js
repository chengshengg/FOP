function cheapestPriceDrink(drink1, drink2, drink3) {
    if(drink1.price<drink2.price && drink1.price<drink3.price){
        return drink1.name
    } else if(drink2.price<drink1.price && drink2.price<drink3.price){
        return drink2.name
    }else{
        return drink3.name
    }
}

console.log(
    cheapestPriceDrink(
        { name: 'Latte', price: 4.5 },
        { name: 'Espresso', price: 3.8 },
        { name: 'Cappuccino', price: 5.0 },
    ),
); //Espresso

module.exports = cheapestPriceDrink;
