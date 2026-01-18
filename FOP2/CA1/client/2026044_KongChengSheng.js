// Name : Kong Cheng Sheng
// Class: DIT/FT/1B/11
// Admin No: 2026044

// External Libraries Used:
// - node-fetch@2: For making HTTP requests to the API
// - readline-sync: For reading user input from command line
// Installation: npm install node-fetch@2 readline-sync

const readline = require("readline-sync");
const fetch = require("node-fetch");
const API_URL = "http://localhost:8081";

//-------------------------------------------
//  Fetch function for PaymentMethod
//  Returns: Map of payment methods with their slugs
//-------------------------------------------
async function getPaymentMethod() {
    try {
        const response = await fetch(`${API_URL}/paymentMethod`);
        
        // Validate response status
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const paymentData = await response.json();
        const paymentMap = new Map(paymentData);
        return paymentMap;
    } catch (error) {
        console.error("Error fetching payment methods:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Fetch function for Product Categories
//  Returns: Map of product categories with their slugs
//-------------------------------------------
async function getProductCategory() {
    try {
        const response = await fetch(`${API_URL}/productCategory`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const categoryData = await response.json();
        const categoryMap = new Map(categoryData);
        return categoryMap;
    } catch (error) {
        console.error("Error fetching product categories:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Fetch function for first 5 Retail Transaction Data
//  Returns: Array of transaction objects
//-------------------------------------------
async function getRetailData5() {
    try {
        const response = await fetch(`${API_URL}/retailData5`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching retail data:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Fetch function for transactions by payment method
//  Parameters: paymentMethodSlug - the slug identifier for payment method
//  Returns: Array of transaction objects
//-------------------------------------------
async function getByPaymentMethod(paymentMethodSlug) {
    try {
        const response = await fetch(`${API_URL}/byPaymentMethod/${paymentMethodSlug}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching transactions by payment method:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Fetch function for transactions by product category
//  Parameters: productCategorySlug - the slug identifier for product category
//  Returns: Array of transaction objects
//-------------------------------------------
async function getByProductCategory(productCategorySlug) {
    try {
        const response = await fetch(`${API_URL}/byProductCategory/${productCategorySlug}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching transactions by product category:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Requirement 1: Display first 5 records sorted by Customer ID (ascending)
//-------------------------------------------
async function displayFirst5Records() {
    try {
        console.log("\n--- First 5 Records (Sorted by Customer ID - Ascending) ---\n");
        
        // Fetch the first 5 records from API
        const records = await getRetailData5();
        
        // Validate that we have data
        if (!records || records.length === 0) {
            console.log("No records found.");
            return;
        }
        
        // Sort by customerID in ascending order
        // Callback function: (a, b) => compares two elements
        const sortedRecords = [...records].sort((a, b) => {
            return a.customerID.localeCompare(b.customerID);
        });
        
        // Display table header
        console.log("Customer ID".padEnd(15) + "Price".padEnd(12) + "Payment Method".padEnd(20) + "Total Amount");
        console.log("-".repeat(75));
        
        // Display each record using forEach
        sortedRecords.forEach(record => {
            console.log(
                record.customerID.padEnd(15) +
                `$${record.price.toFixed(2)}`.padEnd(12) +
                record.paymentMethod.padEnd(20) +
                `$${record.totalAmount.toFixed(2)}`
            );
        });
        
        console.log(); // Empty line for better readability
    } catch (error) {
        console.error("Error in displayFirst5Records:", error.message);
    }
}

//-------------------------------------------
//  Requirement 2: Display average total amount for each product category
//-------------------------------------------
async function displayAverageByCategory() {
    try {
        console.log("\n--- Average Total Amount by Product Category ---\n");
        
        // Get all product categories from API
        const categoryMap = await getProductCategory();
        
        // Validate that we have categories
        if (!categoryMap || categoryMap.size === 0) {
            console.log("No product categories found.");
            return;
        }
        
        // Process each category asynchronously
        for (const [categoryName, categorySlug] of categoryMap) {
            // Fetch all transactions for this category
            const categoryData = await getByProductCategory(categorySlug);
            
            // Calculate sum using reduce()
            // Callback function: (sum, record) => accumulates total
            // Initial value: 0
            const totalSum = categoryData.reduce((sum, record) => {
                return sum + record.totalAmount;
            }, 0);
            
            // Calculate average (prevent division by zero)
            const average = categoryData.length > 0 ? totalSum / categoryData.length : 0;
            
            // Display result in required format
            console.log(`${categoryName} Average Amount: $${average.toFixed(2)}`);
        }
        
        console.log(); // Empty line for better readability
    } catch (error) {
        console.error("Error in displayAverageByCategory:", error.message);
    }
}

//-------------------------------------------
//  Requirement 3: Display payment methods sorted in ascending order
//-------------------------------------------
async function displayPaymentMethods() {
    try {
        console.log("\n--- Available Payment Methods (Sorted) ---\n");
        
        const paymentMethodMap = await getPaymentMethod();
        
        // Validate that we have payment methods
        if (!paymentMethodMap || paymentMethodMap.size === 0) {
            console.log("No payment methods found.");
            return;
        }
        
        // Convert Map to Array (already sorted alphabetically by backend)
        const sortedMethods = Array.from(paymentMethodMap.entries());
        
        // Display each payment method using forEach
        sortedMethods.forEach(([method]) => {
            console.log(`- ${method}`);
        });
        
        console.log(); // Empty line for better readability
        return paymentMethodMap;
    } catch (error) {
        console.error("Error in displayPaymentMethods:", error.message);
        throw error;
    }
}

//-------------------------------------------
//  Requirement 4: Query by payment method and display top 5 by total amount
//-------------------------------------------
async function queryByPaymentMethod() {
    try {
        console.log("\n--- Query by Payment Method ---\n");
        
        // Get and display available payment methods
        const paymentMethodMap = await getPaymentMethod();
        const sortedMethods = Array.from(paymentMethodMap.entries());
        
        console.log("Available payment methods:");
        // Display numbered list using forEach with index
        sortedMethods.forEach(([method], index) => {
            console.log(`${index + 1}. ${method}`);
        });
        
        // Prompt user for payment method selection
        console.log("\nSelect a payment method (enter number):");
        const userInput = readline.question("> ").trim();
        
        // Input validation: check if user input is empty
        if (!userInput) {
            console.log("\nError: Input cannot be empty. Please try again.");
            return;
        }
        
        // Convert input to number and validate
        const choice = parseInt(userInput);
        
        // Validate that choice is a valid number
        if (isNaN(choice)) {
            console.log("\nError: Please enter a valid number.");
            return;
        }
        
        // Validate that choice is within range (1 to number of payment methods)
        if (choice < 1 || choice > sortedMethods.length) {
            console.log(`\nError: Please enter a number between 1 and ${sortedMethods.length}.`);
            return;
        }
        
        // Get selected payment method (subtract 1 because array is 0-indexed)
        const selectedMethod = sortedMethods[choice - 1][0];
        const selectedSlug = sortedMethods[choice - 1][1];
        
        console.log(`\nYou selected: ${selectedMethod}`);
        console.log("Loading data...\n");
        
        // Fetch transactions for selected payment method
        const transactions = await getByPaymentMethod(selectedSlug);
        
        // Validate that we have transactions
        if (transactions.length === 0) {
            console.log("No transactions found for this payment method.");
            return;
        }
        
        // Sort by totalAmount in DESCENDING order
        // Callback: (a, b) => b - a gives descending order
        const sortedTransactions = [...transactions].sort((a, b) => {
            return b.totalAmount - a.totalAmount;
        });
        
        // Get top 5 records using slice()
        const top5 = sortedTransactions.slice(0, 5);
        
        // Display results
        console.log("--- Top 5 Transactions by Total Amount (Descending) ---\n");
        console.log("Customer ID".padEnd(15) + "Price".padEnd(12) + "Payment Method".padEnd(20) + "Total Amount");
        console.log("-".repeat(75));
        
        // Display each record using forEach
        top5.forEach(record => {
            console.log(
                record.customerID.padEnd(15) +
                `$${record.price.toFixed(2)}`.padEnd(12) +
                record.paymentMethod.padEnd(20) +
                `$${record.totalAmount.toFixed(2)}`
            );
        });
        
        console.log(`\nTotal transactions for ${selectedMethod}: ${transactions.length}`);
        console.log(); // Empty line for better readability
    } catch (error) {
        console.error("Error in queryByPaymentMethod:", error.message);
    }
}

//-------------------------------------------
//  Requirement 5: Display category with highest total amount
//-------------------------------------------
async function displayHighestCategory() {
    try {
        console.log("\n--- Product Category with Highest Total Amount ---\n");
        
        // Get all product categories
        const categoryMap = await getProductCategory();
        
        // Validate that we have categories
        if (!categoryMap || categoryMap.size === 0) {
            console.log("No product categories found.");
            return; 
        }
        
        // Array to store all transactions from all categories
        let allTransactions = [];
        
        // Fetch all transactions from all categories
        for (const [categoryName, categorySlug] of categoryMap) {
            const categoryData = await getByProductCategory(categorySlug);
            // Use concat to combine the arrays
            allTransactions = allTransactions.concat(categoryData); 
        }
        
        // Validate that we have transactions
        if (allTransactions.length === 0) {
            console.log("No transactions found.");
            return;
        }
        
        // Callback: (max, transaction) => compares and returns the one with higher totalAmount
        const highestTransaction = allTransactions.reduce((max, transaction) => {
            return transaction.totalAmount > max.totalAmount ? transaction : max;
        }, allTransactions[0]);
    
        console.log(`${highestTransaction.productCategory} : $${highestTransaction.totalAmount.toFixed(2)}\n`);
    } catch (error) {
        console.error("Error in displayHighestCategory:", error.message);
    }
}

//-------------------------------------------
//  Display Main Menu
//  Shows available options to user
//-------------------------------------------
function displayMenu() {
    console.log("\n=====================================================");
    console.log("        RETAIL TRANSACTION DATA - MAIN MENU");
    console.log("=====================================================");
    console.log("1. Display first 5 records (sorted by Customer ID)");
    console.log("2. Display average total amount by product category");
    console.log("3. Display payment methods (sorted)");
    console.log("4. Query transactions by payment method");
    console.log("5. Display category with highest total amount");
    console.log("6. Exit");
    console.log("=====================================================\n");
}

//-------------------------------------------
//  Main Application Function
//-------------------------------------------
async function myApp() {
    try {
        // Test API connection
        console.log("Connecting to API server...");
        const testResponse = await fetch(API_URL);
        
        if (!testResponse.ok) {
            throw new Error("Cannot connect to API server");
        }
        
        const message = await testResponse.text();
        console.log(`${message}`);
        console.log("Connection successful!\n");
        
        // Main application loop
        let running = true;
        
        while (running) {
            displayMenu();
            
            // Get user choice with validation
            const choiceStr = readline.question("Enter your choice (1-6): ");
            const choice = parseInt(choiceStr);
            
            // Validate input is a number
            if (isNaN(choice)) {
                console.log("\nError: Please enter a valid number (1-6).");
                readline.question("\nPress Enter to continue...");
                console.clear();
                continue;
            }
            
            // Process user choice
            switch (choice) {
                case 1:
                    await displayFirst5Records();
                    readline.question("Press Enter to continue...");
                    break;
                case 2:
                    await displayAverageByCategory();
                    readline.question("Press Enter to continue...");
                    break;
                case 3:
                    await displayPaymentMethods();
                    readline.question("Press Enter to continue...");
                    break;
                case 4:
                    await queryByPaymentMethod();
                    readline.question("Press Enter to continue...");
                    break;
                case 5:
                    await displayHighestCategory();
                    readline.question("Press Enter to continue...");
                    break;
                case 6:
                    console.log("\n=====================================================");
                    console.log("  Thank you for using the Retail Transaction Data");
                    console.log("                  Application!");
                    console.log("=====================================================\n");
                    running = false;
                    break;
                default:
                    console.log("\nError: Invalid choice. Please enter a number between 1 and 6.");
                    readline.question("\nPress Enter to continue...");
            }
            
            // Clear screen for next iteration (except when exiting)
            if (running) {
                console.clear();
            }
        }
    } catch (error) {
        console.error("\nCritical Error: Cannot connect to server");
        console.error("\nTroubleshooting:");
        console.error("1. Make sure the server is running on http://localhost:8081");
        console.error("2. Start the server: cd server && node server.js");
        console.error("3. Check that all dependencies are installed");
    }
}

//-------------------------------------------
//  Application Entry Point
//-------------------------------------------
console.clear();
myApp();