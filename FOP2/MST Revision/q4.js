/*
Write a higher-order function that will count the number of positive and negative sentiment in text documents. 

positive = ["happy", "love", "pleasure", "glad", "pretty", "agreeable"]
negative = ["poor", "doubt", "object","afraid", "bad", "pain", "anxious"]

Function: sentiment

Variable: 
operation – positive, negative
string – a string in documents 

Function:

sentiment (operation, doc) { 

}
*/
positive = ["happy", "love", "pleasure", "glad", "pretty", "agreeable"]
negative = ["poor", "doubt", "object","afraid", "bad", "pain", "anxious"]

const test = "I am a poor but happy and pretty dog"

function sentiment (operation, doc) { 
    return operation(doc)
}

function positiveWords(sentence){
    const words = sentence.toLowerCase().split(" ")
    return words.filter(word => positive.includes(word)).length
}
function negativeWords(sentence){
    const words = sentence.toLowerCase().split(" ")
    return words.filter(word => negative.includes(word)).length
}
console.log(sentiment(positiveWords, test))
console.log(sentiment(negativeWords, test))