function getYoungerStudent(student1, student2) {
    if(student1.yearBorn > student2.yearBorn){
        return student1.name
    }else{
        return student2.name
    }

}

console.log(getYoungerStudent({ name: 'Sem', yearBorn: 2004 }, { name: 'Jasmine', yearBorn: 2007 })); // Jasmine

module.exports = getYoungerStudent;
