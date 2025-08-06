module.exports = {
    testcases: [
        {
            input: [['apple', 'banana', 'kiwi']],
            expected: [5, 6, 4],
        },
        {
            input: [['a']],
            expected: [1],
        },
        {
            input: [['apple']],
            expected: [5],
        },
        {
            input: [['one', 'two', 'three']],
            expected: [3, 3, 5],
        },
        {
            input: [['I', 'Love', 'You']],
            expected: [1, 4, 3],
        },
        {
            input: [['she', 'sells', 'seashell', 'by', 'the', 'sea', 'shore']],
            expected: [3, 5, 8, 2, 3, 3, 5],
        },
        {
            input: [['never', 'gonna', 'give', 'you', 'up', 'never', 'gonna', 'let', 'you', 'down']],
            expected: [5, 5, 4, 3, 2, 5, 5, 3, 3, 4],
        },
        {
            input: [['with', 'great', 'power', 'comes', 'great', 'responsibilities']],
            expected: [4, 5, 5, 5, 5, 16],
        },
        {
            input: [['responsibilities', 'has', 'sixteen', 'characters', 'that', 'is', 'very', 'longs']],
            expected: [16, 3, 7, 10, 4, 2, 4, 5],
        },
        {
            input: [['singapore', 'polytechnic', 'so', 'possible']],
            expected: [9, 11, 2, 8],
        },
        {
            input: [['can', 'I', 'stop', 'at', 'ten', 'testcases', 'please']],
            expected: [3, 1, 4, 2, 3, 9, 6],
        },
        {
            input: [['', 'pneumonoultramicroscopicsilicovolcanoconiosis']],
            expected: [0, 45],
        },
        {
            input: [['you', 'are', 'my', 'fire']],
            expected: [3, 3, 2, 4],
        },
        {
            input: [['the', 'one', 'desire']],
            expected: [3, 3, 6],
        },
        {
            input: [['believe', 'when', 'I', 'say']],
            expected: [7, 4, 1, 3],
        },
        {
            input: [['that', 'I', 'want', 'it', 'that', 'way']],
            expected: [4, 1, 4, 2, 4, 3],
        },
        {
            input: [['tell', 'me', 'why']],
            expected: [4, 2, 3],
        },
        {
            input: [['aint', 'nothing', 'but', 'a', 'heartache']],
            expected: [4, 7, 3, 1, 9],
        },
        {
            input: [['great', 'I', 'am', 'at', 'testcase', 'number', 'nineteen', 'one', 'more', 'to', 'go']],
            expected: [5, 1, 2, 2, 8, 6, 8, 3, 4, 2, 2],
        },
        {
            input: [['thank', 'you', 'for', 'reading', 'all', 'the', 'testcases', 'goodnight']],
            expected: [5, 3, 3, 7, 3, 3, 9, 9],
        },
    ],
    options: {
        type: 'JSON',
    },
};
