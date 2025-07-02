module.exports = {
    testcases: [
        {
            input: ['50 Wildlife Avenue', 75, 120, 6],
            expected:
                'The zoo is located at 50 Wildlife Avenue.\nIt has 75 staff members, houses 120 animals, and\naverages 20 animals per enclosure.',
        },
        {
            input: ['80 Mandai Lake Rd', 1500, 2800, 50],
            expected:
                'The zoo is located at 80 Mandai Lake Rd.\nIt has 1500 staff members, houses 2800 animals, and\naverages 56 animals per enclosure.',
        },
        {
            input: ['500 Dover Rd', 1423, 720, 8],
            expected:
                'The zoo is located at 500 Dover Rd.\nIt has 1423 staff members, houses 720 animals, and\naverages 90 animals per enclosure.',
        },
        {
            input: ['Wildlife Avenue', 1, 2, 2],
            expected:
                'The zoo is located at Wildlife Avenue.\nIt has 1 staff member, houses 2 animals, and\naverages 1 animal per enclosure.',
        },
        {
            input: ['50 Wildlife Avenue', 1, 1, 1],
            expected:
                'The zoo is located at 50 Wildlife Avenue.\nIt has 1 staff member, houses 1 animal, and\naverages 1 animal per enclosure.',
        },
    ],
    options: {},
};
