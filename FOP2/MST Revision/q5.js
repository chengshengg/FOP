testresult = {
    "p2300001" : "A" ,
    "p2312033" : "C-" ,
    "p2318812" : "B+",
    "p2380923" : "D" ,
};

// (a) Store the test result using new Map() in Java Script.
const result = new Map()
result.set("p2300001" , "A")
result.set("p2312033" , "C-" ),
result.set("p2318812" , "B+"),
result.set("p2380923" , "D")

// (b) Display the result of "p2380923".
console.log(result.get("p2380923"))

// (c) List out all the result in the testresult.
result.forEach((grade, id) => console.log(id, grade)) // forEach method parameters are (value, key)
