module.exports = {
    testcases: [
        {
            input: [
                { name: 'Latte', price: 4.5 },
                { name: 'Espresso', price: 3.8 },
                { name: 'Cappuccino', price: 5.0 },
            ],
            expected: 'Espresso',
        },
        {
            input: [
                { name: 'Matcha', price: 6.2 },
                { name: 'Mocha', price: 4.9 },
                { name: 'Americano', price: 5.5 },
            ],
            expected: 'Mocha',
        },
        {
            input: [
                { name: 'Coke', price: 1 },
                { name: 'Pepsi', price: 2 },
                { name: 'Fanta', price: 3 },
            ],
            expected: 'Coke',
        },
        {
            input: [
                { name: 'Coke', price: 1 },
                { name: 'Pepsi', price: 3 },
                { name: 'Fanta', price: 2 },
            ],
            expected: 'Coke',
        },
        {
            input: [
                { name: 'Coke', price: 3 },
                { name: 'Pepsi', price: 1 },
                { name: 'Fanta', price: 2 },
            ],
            expected: 'Pepsi',
        },
        {
            input: [
                { name: 'Coke', price: 3 },
                { name: 'Pepsi', price: 2 },
                { name: 'Fanta', price: 1 },
            ],
            expected: 'Fanta',
        },
        {
            input: [
                { name: 'Coke', price: 2 },
                { name: 'Pepsi', price: 1 },
                { name: 'Fanta', price: 3 },
            ],
            expected: 'Pepsi',
        },
        {
            input: [
                { name: 'Coke', price: 2 },
                { name: 'Pepsi', price: 3 },
                { name: 'Fanta', price: 1 },
            ],
            expected: 'Fanta',
        },
        {
            input: [
                { name: 'Apple Juice', price: 12.3 },
                { name: 'Orange Juice', price: 22.4 },
                { name: 'Grape Juice', price: 31.0 },
            ],
            expected: 'Apple Juice',
        },
        {
            input: [
                { name: 'Apple Juice', price: 9 },
                { name: 'Orange Juice', price: 333 },
                { name: 'Grape Juice', price: 22 },
            ],
            expected: 'Apple Juice',
        },
        {
            input: [
                { name: 'Apple Juice', price: 300 },
                { name: 'Orange Juice', price: 11 },
                { name: 'Grape Juice', price: 207 },
            ],
            expected: 'Orange Juice',
        },
        {
            input: [
                { name: 'Apple Juice', price: 420 },
                { name: 'Orange Juice', price: 69 },
                { name: 'Grape Juice', price: 7 },
            ],
            expected: 'Grape Juice',
        },
        {
            input: [
                { name: 'Apple Juice', price: 89 },
                { name: 'Orange Juice', price: 2 },
                { name: 'Grape Juice', price: 333 },
            ],
            expected: 'Orange Juice',
        },
        {
            input: [
                { name: 'Apple Juice', price: 200 },
                { name: 'Orange Juice', price: 3000 },
                { name: 'Grape Juice', price: 10 },
            ],
            expected: 'Grape Juice',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 1 },
                { name: 'Brown Sugar Milk', price: 2 },
                { name: 'Avocado Milk Tea', price: 3 },
            ],
            expected: 'Earl Grey Milk Tea',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 1 },
                { name: 'Brown Sugar Milk', price: 3 },
                { name: 'Avocado Milk Tea', price: 2 },
            ],
            expected: 'Earl Grey Milk Tea',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 2 },
                { name: 'Brown Sugar Milk', price: 1 },
                { name: 'Avocado Milk Tea', price: 3 },
            ],
            expected: 'Brown Sugar Milk',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 3 },
                { name: 'Brown Sugar Milk', price: 1 },
                { name: 'Avocado Milk Tea', price: 2 },
            ],
            expected: 'Brown Sugar Milk',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 3 },
                { name: 'Brown Sugar Milk', price: 2 },
                { name: 'Avocado Milk Tea', price: 1 },
            ],
            expected: 'Avocado Milk Tea',
        },
        {
            input: [
                { name: 'Earl Grey Milk Tea', price: 2 },
                { name: 'Brown Sugar Milk', price: 3 },
                { name: 'Avocado Milk Tea', price: 1 },
            ],
            expected: 'Avocado Milk Tea',
        },
    ],
    options: {
        type: 'JSON',
    },
};
