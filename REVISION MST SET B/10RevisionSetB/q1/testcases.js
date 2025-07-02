module.exports = {
    testcases: [
        {
            input: [
                ['A', 'B'],
                ['A', 'C'],
                ['A', 'B'],
            ],
            expected: 1,
        },
        {
            input: [
                ['A', 'B', 'D', 'C', 'E'],
                ['A', 'C', 'D'],
                ['A', 'B', 'D', 'E'],
            ],
            expected: 2,
        },
        {
            input: [
                ['C', 'B', 'D'],
                ['A', 'C', 'B'],
                ['A', 'B', 'D'],
            ],
            expected: 0,
        },
        {
            input: [['A'], ['A'], ['A']],
            expected: 1,
        },
        {
            input: [
                ['A', 'B', 'C', 'D'],
                ['A', 'B', 'C', 'D'],
                ['A', 'B', 'C', 'D'],
            ],
            expected: 4,
        },
        {
            input: [
                ['A', 'B', 'C', 'D', 'E'],
                ['A', 'B', 'C', 'D'],
                ['A', 'B', 'C', 'D'],
            ],
            expected: 4,
        },
        {
            input: [
                ['A', 'B', 'C', 'D', 'E'],
                ['A', 'B', 'C', 'D'],
                ['A', 'B', 'C', 'D', 'F', 'G'],
            ],
            expected: 4,
        },
        {
            input: [
                ['A', 'B', 'C', 'D', 'E'],
                ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
                ['A', 'B', 'C', 'D', 'F', 'G'],
            ],
            expected: 0,
        },
        {
            input: [['A'], ['A', 'F', 'G', 'H', 'B', 'C', 'D'], ['A', 'B', 'C', 'D', 'F', 'G']],
            expected: 1,
        },
        {
            input: [
                ['X', 'Y', 'Z'],
                ['H', 'L', 'Z', 'G', 'A', 'B', 'C', 'D'],
                ['A', 'B', 'Z', 'C', 'D', 'F', 'G'],
            ],
            expected: 1,
        },
    ],
    options: {},
};
