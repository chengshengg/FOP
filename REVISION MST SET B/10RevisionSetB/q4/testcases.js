module.exports = {
    testcases: [
        { input: [[1, 0, 0, 1, 0, 0, 0, 1, 0]], expected: [4, 6] },
        { input: [[1, 0, 0, 0, 1, 0, 0, 0, 1, 0]], expected: [1, 3] },
        { input: [[1, 1, 1, 1, 0, 1, 1, 1, 1]], expected: [4, 4] },
        { input: [[1, 0, 1, 0, 1, 0]], expected: [1, 1] },
        { input: [[0]], expected: [0, 0] },
        { input: [[1, 1, 1, 0, 0, 0, 0, 0, 0, 0]], expected: [3, 9] },
        { input: [[1, 1, 1, 0]], expected: [3, 3] },
        { input: [[0, 1, 1, 1, 0]], expected: [0, 0] },
        { input: [[0, 1, 1, 0, 0, 1, 0]], expected: [3, 4] },
        { input: [[0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0]], expected: [10, 12] },
    ],
    options: {
        type: 'JSON',
    },
};
