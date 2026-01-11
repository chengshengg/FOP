/* 
    Question 2b
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

function createBankAccount(initialBalance) {
  // Set initial balance
  /* TODO: Add code here */
  
  return {
    /* TODO: Add code here for deposit function */
    deposit(amount){
      initialBalance += amount
      return initialBalance
    },
    /* TODO: Add code here for withdraw function */
    withdraw(amount){
      if(initialBalance>= amount){
        initialBalance -= amount
        return initialBalance
      }else{
        return("Insufficient funds.")
      }
    },
    /* TODO: Add code here for getBalance function */   
    getBalance(){
      return initialBalance
    } 
  };
}

// Test cases
const account1 = createBankAccount(100);
const account2 = createBankAccount(50);

console.log(account1.deposit(50));    // 150
console.log(account1.withdraw(30));   // 120
console.log(account1.getBalance());   // 120

console.log(account2.deposit(25));    // 75
console.log(account2.getBalance());   // 75
console.log(account2.withdraw(100));  // "Insufficient funds"
