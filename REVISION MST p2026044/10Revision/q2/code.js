function checkFruitTier(internationRank, numberOfLikes) {
    tier = 0
    if (internationRank<10){
        tier += 1
    } else if (internationRank >= 10 && internationRank <= 15) {
        tier += 2
    } else if (internationRank > 15) {
        tier += 3
    }
    if (numberOfLikes < 2000){
        tier += 1
    } else if(numberOfLikes >= 2000 && numberOfLikes <= 8000) {
        tier += 2
    } else if (numberOfLikes > 8000) {
        tier += 3
    }

    if (tier < 4) {
        return `C-tier Fruit`
    } else if (tier >= 4 && tier <= 5) {
        return `B-tier Fruit`
    } else {
        return `A-tier Fruit`
    }
}

// Your own test cases
// e.g.;

console.log(checkFruitTier(11, 5000)); // "B-tier Fruit"

module.exports = checkFruitTier;
