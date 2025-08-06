module.exports = {
    testcases: [
        {
            input: [42, 'hello'],
            expected: 'not same',
        },
        {
            input: ['42', 42],
            expected: 'not same',
        },
        {
            input: [42, true],
            expected: 'not same',
        },
        {
            input: [false, 39],
            expected: 'not same',
        },
        {
            input: [{}, 'hello'],
            expected: 'not same',
        },
        {
            input: ['hello', function () {}],
            expected: 'not same',
        },
        {
            input: [[], 123],
            expected: 'not same',
        },
        {
            input: [42, []],
            expected: 'not same',
        },
        {
            input: [42, undefined],
            expected: 'not same',
        },
        {
            input: [undefined, {}],
            expected: 'not same',
        },
        {
            input: ['hello', 'hello'],
            expected: 'same',
        },
        {
            input: ['apple', 'orange'],
            expected: 'same',
        },
        {
            input: [42, 42],
            expected: 'same',
        },
        {
            input: [123, 456],
            expected: 'same',
        },
        {
            input: [0x123, 456],
            expected: 'same',
        },
        {
            input: [true, false],
            expected: 'same',
        },
        {
            input: [[], []],
            expected: 'same',
        },
        {
            input: [[], {}],
            expected: 'same',
        },
        {
            input: [function () {}, function () {}],
            expected: 'same',
        },
        {
            input: [undefined, undefined],
            expected: 'same',
        },
    ],
    options: {
        type: 'JSON',
    },
};
