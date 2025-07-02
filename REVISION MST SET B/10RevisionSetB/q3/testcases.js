module.exports = {
    testcases: [
        { input: [[1, 2, 3, 4], 1], expected: [2, 3, 4, 1] },
        { input: [[1, 2, 3, 4], 3], expected: [4, 1, 2, 3] },
        { input: [[1, 2, 3, 4], 5], expected: [2, 3, 4, 1] },
        { input: [[1], 1], expected: [1] },
        { input: [[1], 2], expected: [1] },
        { input: [[1], 5], expected: [1] },
        { input: [[1], 999], expected: [1] },
        { input: [[1, 9, 3, 2, 4, 5], 999], expected: [2, 4, 5, 1, 9, 3] },
        { input: [[1, 9, 3, 18, 2, 4, 5, 10, 23, 17], 84], expected: [2, 4, 5, 10, 23, 17, 1, 9, 3, 18] },
        {
            input: [[1, 9, 3, 18, 2, 4, 5, 10, 23, 17, 11, 99], 274],
            expected: [11, 99, 1, 9, 3, 18, 2, 4, 5, 10, 23, 17],
        },
    ],
    options: {
        type: 'JSON',
    },
};
