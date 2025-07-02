module.exports = {
    testcases: [
        { input: [[2, 3, 6, 9]], expected: [2] },
        { input: [[5, 11, 14, 25]], expected: [5, 11] },
        { input: [[4, 10, 15, 26]], expected: [] },
        { input: [[5]], expected: [5] },
        { input: [[10]], expected: [10] },
        { input: [[5, 10]], expected: [5] },
        { input: [[5, 10, 15]], expected: [5, 10, 15] },
        { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], expected: [1, 3, 5, 9] },
        { input: [[3, 6, 9]], expected: [3, 6, 9] },
        { input: [[3, 6, 9, 12, 15]], expected: [3, 9, 15] },
    ],
    options: {
        type: 'JSON',
    },
};
