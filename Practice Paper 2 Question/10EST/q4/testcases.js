module.exports = {
    testcases: [
        {
            input: [0],
            expected: 'very low',
        },
        {
            input: [7],
            expected: 'very low',
        },
        {
            input: [16],
            expected: 'very low',
        },
        {
            input: [20],
            expected: 'very low',
        },
        {
            input: [21],
            expected: 'low',
        },
        {
            input: [30],
            expected: 'low',
        },
        {
            input: [40],
            expected: 'low',
        },
        {
            input: [50],
            expected: 'low',
        },
        {
            input: [51],
            expected: 'moderate',
        },
        {
            input: [62],
            expected: 'moderate',
        },
        {
            input: [87],
            expected: 'moderate',
        },
        {
            input: [100],
            expected: 'moderate',
        },
        {
            input: [101],
            expected: 'high',
        },
        {
            input: [136],
            expected: 'high',
        },
        {
            input: [179],
            expected: 'high',
        },
        {
            input: [200],
            expected: 'high',
        },
        {
            input: [201],
            expected: 'very high',
        },
        {
            input: [250],
            expected: 'very high',
        },
        {
            input: [448],
            expected: 'very high',
        },
        {
            input: [500],
            expected: 'very high',
        },
    ],
    options: {
        type: 'JSON',
    },
};
