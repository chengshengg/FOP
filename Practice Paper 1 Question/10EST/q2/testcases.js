module.exports = {
    testcases: [
        {
            input: [100, 10, 9],
            expected: 119,
        },
        {
            input: [100, 0, 0],
            expected: 100,
        },
        {
            input: [100, 10, 0],
            expected: 110,
        },
        {
            input: [100, 0, 10],
            expected: 110,
        },
        {
            input: [100, 10, 10],
            expected: 120,
        },
        {
            input: [100, 5, 10],
            expected: 115,
        },
        {
            input: [100, 10, 5],
            expected: 115,
        },
        {
            input: [1000, 3, 5],
            expected: 1080,
        },
        {
            input: [1000, 10, 9],
            expected: 1190,
        },
        {
            input: [1000, 11, 7],
            expected: 1180,
        },
        {
            input: [9281, 11, 7],
            expected: 10951.58,
        },
        {
            input: [18727, 10, 3],
            expected: 21161.51,
        },
        {
            input: [912, 1, 3],
            expected: 948.48,
        },
        {
            input: [888, 8, 8],
            expected: 1030.08,
        },
        {
            input: [777, 7, 7],
            expected: 885.78,
        },
        {
            input: [666, 6, 6],
            expected: 745.92,
        },
        {
            input: [29182, 12, 100],
            expected: 61865.84,
        },
        {
            input: [2918, 100, 100],
            expected: 8754,
        },
        {
            input: [2918, 99, 100],
            expected: 8724.82,
        },
        {
            input: [5783, 100, 99],
            expected: 17291.17,
        },
    ],
    options: {
        type: 'floating point',
    },
};
