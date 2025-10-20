function getCategory(age, isStudent) {
    
    if(age<13){
        return "child"
    }else if(age<=19 && isStudent == true){
        return "teen student"
    }else if(age<=19){
        return "teen"
    }else{
        return "adult"
    }
}

console.log(getCategory(12, false)); // child

module.exports = getCategory;
