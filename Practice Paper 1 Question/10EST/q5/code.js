function getLargerRectangle(rectangle1, rectangle2) {
    if(rectangle1.length*rectangle1.width > rectangle2.length*rectangle2.width){
        return rectangle1
    }else{
        return rectangle2
    }
}

console.log(getLargerRectangle({ length: 4, width: 8 }, { length: 9, width: 3 })); // { length: 4, width: 8 }

module.exports = getLargerRectangle;
