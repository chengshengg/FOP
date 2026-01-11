/* 
    Question 2c
    Name: Kong Cheng Sheng
    Admin No: p2026044
    Class: DIT1B11

*/

function secretVault(code) {
    // Initialise the stored password 
    /* TODO: Add code here */
    let privateKey = code
    // private emergency key
    /* TODO: Add code here */
    let emergencyKey = "0524"
    // Display Vault secured.
    console.log("Vault secured");


    return {
        // Function 1 : getCode(<password>):
        /* TODO: Add code here */
        getCode(password){
            if(privateKey == password){
                return("Access Granted.")
            }else{
                return("Access Denied.")
            }
        },
        // Function 2: changeCode(<existingPassword>, <newPassword>)
        /* TODO: Add code here */
        changeCode(existingPassword, newPassword){
            if(existingPassword==privateKey){
                code = newPassword
                return("Password Updated.")
            }else{
                return("Incorrect Password.")
            }
        },
        // Function 3: displayCode(<emKey>)
        /* TODO: Add code here */
        displayCode(emKey){
            if(emergencyKey == emKey){
                return(`Password is ${privateKey}.`)
            }else{
                return("Incorrect Key")
            }
        }
    };
}

// Test cases
// (a) Initialise the secretVault with a secret passcode (4 digits) using 1234.
const result = secretVault('1234');

// (b) Access the vault with the correct password (e.g. 1234).
console.log(result.getCode('1234'));

// (c) Change new password (5678) with incorrect existing password (9999).
console.log(result.changeCode('9999', '5678'));

// (d) Change new password (5678) with correct existing password (1234).
console.log(result.changeCode('1234', '5678'));

// (e) Access the vault with the previous password (e.g. 1234).
console.log(result.getCode('1234'));

// (f) Use an incorrect emergency key (e.g. 9999) to get the stored  password.
console.log(result.displayCode('1234'));

// (g) Use the correct emergency key (e.g. 0524) to get the stored password.
console.log(result.displayCode('0524'));

// (h) Access the vault with the new password (e.g. 5678).
console.log(result.getCode('5678'));       
