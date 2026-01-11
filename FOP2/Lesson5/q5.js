const input = require('readline-sync');
// E-Comm variable declaration, item display, user account verification and stock availability  

// Select iPhone Model
selected = false;
// Check Bank have enough money
haveFund = false;
// Check in stock
isAvailable = false;

// Bank Account
const bankAccount = {
    name: "Jane Lim",
    accountid: 81200222,
    accountbalance: 2000.00,
};

// Products 
// Phone model price and stock
const iPhone = {
    model: "iPhone14",
    storage: [{
        space: 128,
        price: 1311.00,
        stock: 5,
    },
    {
        space: 256,
        price: 1482.00,
        stock: 0
    },],
};
// =============================
// Selected item (simulate user choice)
// =============================
let selectedItem = null;

// =============================
// Function: Display phones & select item
// =============================
function selectItem(storageChoice) {
    return new Promise((resolve, reject) => {
        const item = iPhone.storage.find(s => s.space === storageChoice);

        if (!item) {
            reject("Selected phone model not found");
            return;
        }

        selectedItem = item;
        selected = true;
        resolve("Item selected");
    });
}

// =============================
// Function: Check bank fund
// =============================
function checkFund() {
    return new Promise((resolve, reject) => {
        if (bankAccount.accountbalance >= selectedItem.price) {
            haveFund = true;
            resolve("Sufficient funds");
        } else {
            reject("Insufficient bank balance");
        }
    });
}

// =============================
// Function: Check stock availability
// =============================
function checkStock() {
    return new Promise((resolve, reject) => {
        if (selectedItem.stock > 0) {
            isAvailable = true;
            resolve("Stock available");
        } else {
            reject("Item out of stock");
        }
    });
}

// =============================
// Purchase Flow using Promise.all
// =============================
selectItem(128) // user selects 128GB
    .then(() => {
        return Promise.all([
            checkFund(),
            checkStock()
        ]);
    })
    .then(() => {
        if (selected && haveFund && isAvailable) {
            console.log("Order Confirmed");
        }
    })
    .catch(error => {
        console.log("Order Failed:", error);
    });
// function – Display the phone available in the store (use the iPhone data above)
// Prompt user to select the item
// Set the variable selected = true, once user has selected the item to purchase.

// function – Check user account (name – Jane Lim) 
// Does user has sufficient account balance to buy the selected item
// Set haveFund = true, if user has sufficient fund.

// create three promise function to validate 
// selected = false;
// haveFund = false;
// isAvailable = false;

// Use Promise.all check the 3 status, selected, haveFund and isAvailable concurrently

// Display Prompt : Order Confirmed if all the 3 status are true.
// Display reason why order failed.