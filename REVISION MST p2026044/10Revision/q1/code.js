function enoughVegetables(need, available) {
    if (need > available * 1000) {
        return `There is a lack of ${(need - available*1000)} grams of vegetables`
    } else if (need < available*1000) {
        return `There is an extra ${(available*1000 - need)} grams of vegetables`
    }else {
        return `There are enough vegetables for everyone`
    }
}

// Your own test cases
// e.g.;

console.log(enoughVegetables(4000, 4.5)); // There is an extra 500 grams of vegetables

module.exports = enoughVegetables;
