module.exports = {
    testcases: [
        {
            input: [
                { name: 'Liam', height: 170 },
                { name: 'Sophia', height: 165 },
                { name: 'Noah', height: 180 },
            ],
            expected: 'Noah',
        },
        {
            input: [
                { name: 'Aisha', height: 155 },
                { name: 'Ben', height: 168 },
                { name: 'Carlos', height: 160 },
            ],
            expected: 'Ben',
        },
        {
            input: [
                { name: 'A', height: 1 },
                { name: 'B', height: 2 },
                { name: 'C', height: 3 },
            ],
            expected: 'C',
        },
        {
            input: [
                { name: 'D', height: 2 },
                { name: 'E', height: 1 },
                { name: 'F', height: 3 },
            ],
            expected: 'F',
        },
        {
            input: [
                { name: 'H', height: 2 },
                { name: 'I', height: 3 },
                { name: 'J', height: 1 },
            ],
            expected: 'I',
        },
        {
            input: [
                { name: 'K', height: 1 },
                { name: 'L', height: 3 },
                { name: 'M', height: 2 },
            ],
            expected: 'L',
        },
        {
            input: [
                { name: 'N', height: 3 },
                { name: 'O', height: 1 },
                { name: 'P', height: 2 },
            ],
            expected: 'N',
        },
        {
            input: [
                { name: 'Q', height: 3 },
                { name: 'R', height: 2 },
                { name: 'S', height: 1 },
            ],
            expected: 'Q',
        },
        {
            input: [
                { name: 'AA', height: 10 },
                { name: 'BB', height: 20 },
                { name: 'CC', height: 30 },
            ],
            expected: 'CC',
        },
        {
            input: [
                { name: 'DD', height: 21 },
                { name: 'EE', height: 15 },
                { name: 'FF', height: 39 },
            ],
            expected: 'FF',
        },
        {
            input: [
                { name: 'HH', height: 51 },
                { name: 'II', height: 73 },
                { name: 'JJ', height: 27 },
            ],
            expected: 'II',
        },
        {
            input: [
                { name: 'KK', height: 19 },
                { name: 'LL', height: 99 },
                { name: 'MM', height: 74 },
            ],
            expected: 'LL',
        },
        {
            input: [
                { name: 'NN', height: 102 },
                { name: 'OO', height: 99 },
                { name: 'PP', height: 100 },
            ],
            expected: 'NN',
        },
        {
            input: [
                { name: 'QQ', height: 1024 },
                { name: 'RR', height: 512 },
                { name: 'SS', height: 258 },
            ],
            expected: 'QQ',
        },
        {
            input: [
                { name: 'X', height: 123 },
                { name: 'Y', height: 234 },
                { name: 'Z', height: 345 },
            ],
            expected: 'Z',
        },
        {
            input: [
                { name: 'A', height: 928 },
                { name: 'Y', height: 361 },
                { name: 'E', height: 256 },
            ],
            expected: 'A',
        },
        {
            input: [
                { name: 'Tom', height: 132 },
                { name: 'John', height: 157 },
                { name: 'Mary', height: 111 },
            ],
            expected: 'John',
        },
        {
            input: [
                { name: 'Larry', height: 257 },
                { name: 'Mary', height: 121 },
                { name: 'John', height: 142 },
            ],
            expected: 'Larry',
        },
        {
            input: [
                { name: 'Ace', height: 111 },
                { name: 'Ben', height: 132 },
                { name: 'Carl', height: 157 },
            ],
            expected: 'Carl',
        },
        {
            input: [
                { name: 'Lim', height: 157 },
                { name: 'Tan', height: 132 },
                { name: 'Ang', height: 111 },
            ],
            expected: 'Lim',
        },
    ],
    options: {
        type: 'JSON',
    },
};
