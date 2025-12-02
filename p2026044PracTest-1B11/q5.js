/* 
	Question 5
	Name: Kong Cheng Sheng
	Admin No: p2026044
	Class: DIT1B011
	
*/

// All Vehicle Population data
const allVehicleData = require('./dataVehicleInfo');

/*
    TODO: Fill up the code part a
*/
for(let i=0;i<5;i++){
	console.log(`${allVehicleData[i].year} ${allVehicleData[i].category} ${allVehicleData[i].type}`)
}
/*
    TODO: Fill up the code part b
*/
allVehicleData.sort()
for(let i=0;i<allVehicleData.length;i++){
	if(i==0){
		console.log('First set of sort by year')
		console.log(`${allVehicleData[i].year} ${allVehicleData[i].category} ${allVehicleData[i].type}`)

	}
	if(i==allVehicleData.length-1){
		console.log("Last set of sort by year")
		console.log(`${allVehicleData[i].year} ${allVehicleData[i].category} ${allVehicleData[i].type}`)

	}
}

/*
    TODO: Fill up the code part c
*/


let filterCars = allVehicleData.filter(e => e.type == "Private cars")
for(let i=0;i<filterCars.length;i++){
	console.log(`${filterCars[i].year} ${filterCars[i].category} ${filterCars[i].number}`)

}
