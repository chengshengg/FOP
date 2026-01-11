function select() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Today Lunch");
            resolve('Today Lunch Deal');
        }, 2000);
    });
}

function price() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Price")
            resolve('$20.00');
        }, 300);
    });
}

function pay() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Payment method")
            resolve('PayLah!');
        }, 500);
    });
}

async function lunchmenu() {
    const a = await select();
    const b = await price();
    const c = await pay();

    console.log("Item selected is " + a);
    console.log("Item selected amount is " + b);
    console.log("Mode of payment " + c);
}
lunchmenu();
