function getMostCountriesVisited(travelArray) {
    let most = travelArray[0]
    for(i=1;i<travelArray.length;i++){
        if(most.countriesVisited.length < travelArray[i].countriesVisited.length){
            most = travelArray[i]
        }
    }
    return most
}

console.log(
    getMostCountriesVisited([
        { name: 'Zara', countriesVisited: ['Japan', 'Korea', 'France'] },
        { name: 'Leo', countriesVisited: ['Canada'] },
        { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] },
    ]),
); // { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] }

module.exports = getMostCountriesVisited;
