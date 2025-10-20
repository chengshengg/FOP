module.exports = {
    testcases: [
        {
            input: [12, false],
            expected: 'child',
        },
        {
            input: [1, true],
            expected: 'child',
        },
        {
            input: [7, false],
            expected: 'child',
        },
        {
            input: [10, true],
            expected: 'child',
        },
        {
            input: [12, true],
            expected: 'child',
        },
        {
            input: [13, true],
            expected: 'teen student',
        },
        {
            input: [14, true],
            expected: 'teen student',
        },
        {
            input: [16, true],
            expected: 'teen student',
        },
        {
            input: [18, true],
            expected: 'teen student',
        },
        {
            input: [19, true],
            expected: 'teen student',
        },
        {
            input: [13, false],
            expected: 'teen',
        },
        {
            input: [15, false],
            expected: 'teen',
        },
        {
            input: [17, false],
            expected: 'teen',
        },
        {
            input: [18, false],
            expected: 'teen',
        },
        {
            input: [19, false],
            expected: 'teen',
        },
        {
            input: [20, true],
            expected: 'adult',
        },
        {
            input: [28, false],
            expected: 'adult',
        },
        {
            input: [35, true],
            expected: 'adult',
        },
        {
            input: [43, false],
            expected: 'adult',
        },
        {
            input: [50, true],
            expected: 'adult',
        },
    ],
    options: {
        type: 'JSON',
    },
};
