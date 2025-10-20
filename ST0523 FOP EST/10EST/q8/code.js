function addComment(scoreArray) {
    for(let i=0;i<scoreArray.length;i++){
        if(scoreArray[i].score>=75){
            scoreArray[i].comment = "distinction"
    }   else if(scoreArray[i].score>=50){
            scoreArray[i].comment = "pass"
    }   else{
            scoreArray[i].comment = "poor"
        }
    } 
    return scoreArray
}

console.log(addComment([{ score: 45 }, { score: 75 }])); // [ { score : 45, comment : 'poor' }, { score : 75, comment : 'distinction' } ]

module.exports = addComment;
