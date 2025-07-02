function createZooInfo(zooAddress, numberOfStaff, numberOfAnimals, numberOfEnclosures) {
    if (numberOfStaff>1 && numberOfAnimals>1 && numberOfEnclosures>1) {
        return `The zoo is located at ${zooAddress}.\nIt has ${numberOfStaff} staff members, houses ${numberOfAnimals} animals, and\naverages ${numberOfAnimals/numberOfEnclosures} animals per enclosure.`
    }
    else if (numberOfStaff===1 && numberOfAnimals>1 && numberOfAnimals>1) {
        return `The zoo is located at ${zooAddress}.\nIt has ${numberOfStaff} staff member, houses ${numberOfAnimals} animals, and\naverages ${numberOfAnimals/numberOfEnclosures} animal per enclosure.`
    }
    else if (numberOfStaff===1 && numberOfAnimals===1 && numberOfAnimals===1) {
        return `The zoo is located at ${zooAddress}.\nIt has ${numberOfStaff} staff member, houses ${numberOfAnimals} animal, and\naverages 1 animal per enclosure.`
    }
}

// Your own test cases
// e.g.;

console.log(createZooInfo('50 Wildlife Avenue', 75, 120, 6));

module.exports = createZooInfo;
