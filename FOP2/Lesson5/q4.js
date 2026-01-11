const input = require('readline-sync');
let haveMoney = false

// promise
const willBuyNewPhone = new Promise((resolve, reject)=>{
    if (haveMoney){
        let phone = {
            brand: 'Samsung',
            color: 'black'
        }
        resolve(phone)  // fulfilled
    }else{
        let reason = "I do not have money"
        reject(reason)  // reject
    }
})

// call our promise
function chkSaving(){
    willBuyNewPhone
        .then(function (fulfilled){
            // yay, you got a new phone
            console.log(fulfilled) 
        })
        .catch(function(error){
            console.log(error)
        })
}

chkSaving()
