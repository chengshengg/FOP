function getFinalPrice(customerAge, price) {
    if (customerAge % 5 == 0) {
        return (price*95/100)
    } else {
        return price
    }
}

// Your own test cases
// e.g.;

console.log(getFinalPrice(30, 66)); //62.7

module.exports = getFinalPrice;
