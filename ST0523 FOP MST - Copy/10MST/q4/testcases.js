module.exports = {
    testcases: [
        { input: [3, 13], expected: true },
        { input: [10, 20], expected: true },
        { input: [1, 23], expected: false },
        { input: [12, 34], expected: false },
        { input: [2, 2], expected: true },
        { input: [91, 94], expected: true },
        { input: [92, 2], expected: true },
        { input: [24, 8], expected: false },
        { input: [38, 66], expected: false },
        { input: [1, 3], expected: false },
        { input: [79, 20], expected: false },
        { input: [93, 69], expected: true },
        { input: [63, 57], expected: false },
        { input: [71, 69], expected: false },
        { input: [43, 53], expected: true },
        { input: [44, 52], expected: false },
        { input: [7, 64], expected: false },
        { input: [13, 29], expected: false },
        { input: [85, 87], expected: true },
        { input: [80, 13], expected: false },
    ],
    options: {
        type: 'JSON',
    },
};
