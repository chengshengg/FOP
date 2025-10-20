module.exports = {
    testcases: [
        {
            input: [0],
            expected: 'freezing',
        },
        {
            input: [-10],
            expected: 'freezing',
        },
        {
            input: [-20],
            expected: 'freezing',
        },
        {
            input: [-5],
            expected: 'freezing',
        },
        {
            input: [-13],
            expected: 'freezing',
        },
        {
            input: [1],
            expected: 'cooling',
        },
        {
            input: [7],
            expected: 'cooling',
        },
        {
            input: [24],
            expected: 'cooling',
        },
        {
            input: [37],
            expected: 'cooling',
        },
        {
            input: [50],
            expected: 'cooling',
        },
        {
            input: [51],
            expected: 'warm',
        },
        {
            input: [58],
            expected: 'warm',
        },
        {
            input: [76],
            expected: 'warm',
        },
        {
            input: [83],
            expected: 'warm',
        },
        {
            input: [99],
            expected: 'warm',
        },
        {
            input: [100],
            expected: 'boiling',
        },
        {
            input: [124],
            expected: 'boiling',
        },
        {
            input: [151],
            expected: 'boiling',
        },
        {
            input: [173],
            expected: 'boiling',
        },
        {
            input: [200],
            expected: 'boiling',
        },
    ],
    options: {
        type: 'JSON',
    },
};
