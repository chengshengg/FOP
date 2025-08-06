function getTotalSpendingBySingles(personArray) {}

console.log(
    getTotalSpendingBySingles([
        { isSingle: true, spendings: [20, 50, 30] },
        { isSingle: false, spendings: [100, 200] },
        { isSingle: true, spendings: [10, 40] },
    ]),
); // 150

module.exports = getTotalSpendingBySingles;
