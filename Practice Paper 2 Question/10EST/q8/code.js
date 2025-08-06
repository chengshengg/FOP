function getTopAchiever(studentArray) {}

console.log(
    getTopAchiever([
        { name: 'Alice', target: 70, scoreArray: [72, 80] },
        { name: 'Bob', target: 85, scoreArray: [88, 85, 90, 87] },
        { name: 'Charlie', target: 65, scoreArray: [55, 64, 70, 50] },
    ]),
); // Bob

module.exports = getTopAchiever;
