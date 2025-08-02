function getTallestPerson(person1, person2, person3) {}

console.log(
    getTallestPerson({ name: 'Liam', height: 170 }, { name: 'Sophia', height: 165 }, { name: 'Noah', height: 180 }),
); // Noah

module.exports = getTallestPerson;
