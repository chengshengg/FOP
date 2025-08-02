module.exports = {
    testcases: [
        {
            input: [5, 14, 3],
            expected: 3,
        },
        {
            input: [35, 43, 7],
            expected: 2,
        },
        {
            input: [1, 9, 1],
            expected: 9,
        },
        {
            input: [1, 9, 2],
            expected: 4,
        },
        {
            input: [1, 9, 3],
            expected: 3,
        },
        {
            input: [1, 9, 4],
            expected: 2,
        },
        {
            input: [1, 9, 5],
            expected: 1,
        },
        {
            input: [1, 10, 5],
            expected: 2,
        },
        {
            input: [1, 100, 5],
            expected: 20,
        },
        {
            input: [1, 100, 6],
            expected: 16,
        },
        {
            input: [1, 100, 10],
            expected: 10,
        },
        {
            input: [1, 100, 23],
            expected: 4,
        },
        {
            input: [10, 100, 10],
            expected: 10,
        },
        {
            input: [20, 100, 10],
            expected: 9,
        },
        {
            input: [30, 100, 10],
            expected: 8,
        },
        {
            input: [30, 70, 12],
            expected: 3,
        },
        {
            input: [32, 172, 32],
            expected: 5,
        },
        {
            input: [39, 572, 37],
            expected: 14,
        },
        {
            input: [42, 652, 13],
            expected: 47,
        },
        {
            input: [7, 777, 77],
            expected: 10,
        },
    ],
    options: {
        type: 'JSON',
    },
};
