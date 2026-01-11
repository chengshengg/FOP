const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(msg => console.log("The message is " + msg));

