function getTallestPerson(person1, person2, person3) {
    if(person1.height>person2.height && person1.height>person3.height){
        return person1.name
    }else if(person2.height>person1.height && person2.height>person3.height){
        return person2.name
    }else{
        return person3.name
    }
}

console.log(
    getTallestPerson({ name: 'Liam', height: 170 }, { name: 'Sophia', height: 165 }, { name: 'Noah', height: 180 }),
); // Noah

module.exports = getTallestPerson;
