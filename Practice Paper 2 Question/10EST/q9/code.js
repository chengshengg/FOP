function getMostCountriesVisited(travelArray) {}

console.log(
    getMostCountriesVisited([
        { name: 'Zara', countriesVisited: ['Japan', 'Korea', 'France'] },
        { name: 'Leo', countriesVisited: ['Canada'] },
        { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] },
    ]),
); // { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] }

module.exports = getMostCountriesVisited;
