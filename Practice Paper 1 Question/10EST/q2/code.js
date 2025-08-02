function calculateTotalBill(price, servicePercent, gstPercent) {
    totalBill = price * (1+ servicePercent/100 + gstPercent/100)
    return totalBill
}

console.log(calculateTotalBill(100, 10, 9)); //119.00

module.exports = calculateTotalBill;
