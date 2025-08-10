// addTemperatureCategory

// Complete the function addTemperatureCategory which:

//     Has one parameter:

//         city: An object with a property temperature (a number representing the city’s temperature in °C),

//     Add a new property called category to this object:

//         If temperature is above 30, assign "hot"

//         If temperature is between 20 and 30 (inclusive), assign "warm"

//         If temperature is below 20, assign "cold".

//     Return the updated object.

// Sample 1

// Input: addTemperatureCategory({ temperature: 35 });
// Returns: { temperature: 35, category: "hot" }

// Sample 2

// Input: addTemperatureCategory({ temperature: 25 });
// Returns: { temperature: 25, category: "warm" }

function addTemperatureCategory(city){
    if(city.temperature>30){
        city.category = "hot"
    }else if(city.temperature>= 20 && city.temperature<=30){
        city.category = "warm"
    }else{
        city.category = "cold"
    }
    return city
}

console.log(addTemperatureCategory({ temperature: 25 }))