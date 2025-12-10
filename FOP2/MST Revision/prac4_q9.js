const carSales = require('./carsales')

let allCarSales = [...carSales]

for(let i=0;i<allCarSales.length;i++){
    console.log(`${allCarSales[i].manufacturer} ${allCarSales[i].model} S$${allCarSales[i].salesPrice} S$${allCarSales[i].resalePrice}` )
}