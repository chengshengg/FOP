module.exports = {
    testcases: [
        {
            input: [
                { length: 4, width: 8 },
                { length: 9, width: 3 },
            ],
            expected: { length: 4, width: 8 },
        },
        {
            input: [
                { length: 1, width: 1 },
                { length: 2, width: 2 },
            ],
            expected: { length: 2, width: 2 },
        },
        {
            input: [
                { length: 2, width: 2 },
                { length: 1, width: 1 },
            ],
            expected: { length: 2, width: 2 },
        },
        {
            input: [
                { length: 1, width: 2 },
                { length: 3, width: 1 },
            ],
            expected: { length: 3, width: 1 },
        },
        {
            input: [
                { length: 1, width: 4 },
                { length: 3, width: 1 },
            ],
            expected: { length: 1, width: 4 },
        },
        {
            input: [
                { length: 4, width: 1 },
                { length: 1, width: 3 },
            ],
            expected: { length: 4, width: 1 },
        },
        {
            input: [
                { length: 3, width: 1 },
                { length: 1, width: 2 },
            ],
            expected: { length: 3, width: 1 },
        },
        {
            input: [
                { length: 10, width: 6 },
                { length: 15, width: 5 },
            ],
            expected: { length: 15, width: 5 },
        },
        {
            input: [
                { length: 10, width: 5 },
                { length: 15, width: 6 },
            ],
            expected: { length: 15, width: 6 },
        },
        {
            input: [
                { length: 10, width: 5 },
                { length: 15, width: 6 },
            ],
            expected: { length: 15, width: 6 },
        },
        {
            input: [
                { length: 3, width: 3 },
                { length: 2, width: 4 },
            ],
            expected: { length: 3, width: 3 },
        },
        {
            input: [
                { length: 4, width: 4 },
                { length: 7, width: 2 },
            ],
            expected: { length: 4, width: 4 },
        },
        {
            input: [
                { length: 9, width: 3 },
                { length: 10, width: 2 },
            ],
            expected: { length: 9, width: 3 },
        },
        {
            input: [
                { length: 10, width: 2 },
                { length: 9, width: 3 },
            ],
            expected: { length: 9, width: 3 },
        },
        {
            input: [
                { length: 12, width: 22 },
                { length: 10, width: 24 },
            ],
            expected: { length: 12, width: 22 },
        },
        {
            input: [
                { length: 23, width: 3 },
                { length: 13, width: 12 },
            ],
            expected: { length: 13, width: 12 },
        },
        {
            input: [
                { length: 231, width: 13 },
                { length: 213, width: 312 },
            ],
            expected: { length: 213, width: 312 },
        },
        {
            input: [
                { length: 728, width: 918 },
                { length: 192, width: 999 },
            ],
            expected: { length: 728, width: 918 },
        },
        {
            input: [
                { length: 1, width: 9999 },
                { length: 999, width: 3 },
            ],
            expected: { length: 1, width: 9999 },
        },
        {
            input: [
                { length: 9, width: 9999 },
                { length: 999, width: 300 },
            ],
            expected: { length: 999, width: 300 },
        },
    ],
    options: {
        type: 'JSON',
    },
};
