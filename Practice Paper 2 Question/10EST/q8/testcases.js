module.exports = {
    testcases: [
        {
            input: [
                [
                    { name: 'Alice', target: 70, scoreArray: [72, 80] },
                    { name: 'Bob', target: 85, scoreArray: [88, 85, 90, 87] },
                    { name: 'Charlie', target: 65, scoreArray: [55, 64, 70, 50] },
                ],
            ],
            expected: 'Bob',
        },
        {
            input: [
                [
                    { name: 'Alice', target: 70, scoreArray: [72, 80] },
                    { name: 'Bob', target: 85, scoreArray: [88] },
                ],
            ],
            expected: 'Alice',
        },
        {
            input: [
                [
                    { name: 'Bob', target: 85, scoreArray: [88] },
                    { name: 'Alice', target: 70, scoreArray: [72, 80] },
                ],
            ],
            expected: 'Alice',
        },
        {
            input: [
                [
                    { name: 'Tom', target: 85, scoreArray: [85] },
                    { name: 'John', target: 70, scoreArray: [70, 70] },
                ],
            ],
            expected: 'John',
        },
        {
            input: [
                [
                    { name: 'Bob', target: 65, scoreArray: [55, 64, 70, 50] },
                    { name: 'Alice', target: 70, scoreArray: [72, 80] },
                    { name: 'Karl', target: 85, scoreArray: [88, 85, 90, 87] },
                ],
            ],
            expected: 'Karl',
        },
        {
            input: [
                [
                    { name: 'Charlie', target: 65, scoreArray: [70, 55, 64, 50] },
                    { name: 'Bob', target: 70, scoreArray: [80, 72] },
                    { name: 'Don', target: 85, scoreArray: [90, 85, 88, 87] },
                ],
            ],
            expected: 'Don',
        },
        {
            input: [
                [
                    { name: 'Kovan', target: 65, scoreArray: [10, 12, 23, 65] },
                    { name: 'Serangoon', target: 70, scoreArray: [1, 2, 3, 70, 70, 70] },
                    { name: 'SengKang', target: 85, scoreArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 99] },
                ],
            ],
            expected: 'Serangoon',
        },
        {
            input: [
                [
                    { name: 'Yishun', target: 32, scoreArray: [65, 12, 35, 10] },
                    { name: 'Khatib', target: 91, scoreArray: [80, 70, 99, 103, 1, 2, 99] },
                    { name: 'Sembawang', target: 33, scoreArray: [33, 1, 2, 3] },
                ],
            ],
            expected: 'Khatib',
        },
        {
            input: [
                [
                    {
                        name: 'Marios',
                        target: 30,
                        scoreArray: [94, 37, 47, 25, 20, 0, 29, 26, 4, 71],
                    },
                    {
                        name: 'Layton',
                        target: 26,
                        scoreArray: [78, 42, 5, 6, 17, 75, 70, 23, 55, 1, 2],
                    },
                    {
                        name: 'Harper',
                        target: 98,
                        scoreArray: [13, 51, 91, 99, 62, 100, 10, 51, 17, 97, 97],
                    },
                    {
                        name: 'Neo',
                        target: 44,
                        scoreArray: [24, 22, 88, 48, 94, 76, 28, 33, 5, 10, 23, 90, 39, 94],
                    },
                    {
                        name: 'Ezekiel',
                        target: 31,
                        scoreArray: [16, 16, 45, 5, 11, 6, 50, 32, 15, 13, 74, 7, 41, 14],
                    },
                    {
                        name: 'Keir',
                        target: 66,
                        scoreArray: [96, 59, 35, 34, 32, 49, 56, 51, 36, 86, 67],
                    },
                    {
                        name: 'Tomson',
                        target: 53,
                        scoreArray: [81, 93, 36, 51, 29, 8, 99, 17, 14, 40],
                    },
                ],
            ],
            expected: 'Neo',
        },
        {
            input: [
                [
                    {
                        name: 'Clement',
                        target: 44,
                        scoreArray: [39, 33, 12, 72, 76, 92, 35, 45, 36],
                    },
                    {
                        name: 'Tarik',
                        target: 59,
                        scoreArray: [42, 91, 100, 57, 47, 86, 73, 57, 51, 99],
                    },
                    {
                        name: 'Joojo',
                        target: 37,
                        scoreArray: [19, 7, 66, 34, 95, 13, 0, 41, 97, 67, 1],
                    },
                    {
                        name: 'Anees',
                        target: 46,
                        scoreArray: [91, 64, 35, 30, 78, 34, 47, 10, 6, 44],
                    },
                    {
                        name: 'Arryn',
                        target: 42,
                        scoreArray: [27, 37, 72, 8, 72, 66, 15, 1, 75, 19, 44],
                    },
                    {
                        name: 'Roy',
                        target: 46,
                        scoreArray: [30, 96, 6, 43, 63, 31, 22, 25, 53, 84, 34],
                    },
                    {
                        name: 'Jacob',
                        target: 31,
                        scoreArray: [30, 4, 87, 26, 3, 2, 11, 56, 51, 73, 4, 65, 73, 17, 90, 31],
                    },
                ],
            ],
            expected: 'Jacob',
        },
        {
            input: [
                [
                    {
                        name: 'Sergei',
                        target: 32,
                        scoreArray: [7, 48, 84, 0, 14, 25, 48, 18, 74, 95, 37, 0, 50, 5],
                    },
                    {
                        name: 'Sami-Ullah',
                        target: 45,
                        scoreArray: [3, 45, 73, 65, 20, 52, 30, 23, 2],
                    },
                    {
                        name: 'Lennen',
                        target: 50,
                        scoreArray: [39, 69, 85, 53, 59, 4, 11, 28, 61, 89, 14, 53],
                    },
                    {
                        name: 'Pablo',
                        target: 59,
                        scoreArray: [23, 93, 50, 50, 43, 72, 62, 83, 44, 5],
                    },
                    {
                        name: 'Levi',
                        target: 97,
                        scoreArray: [38, 95, 97, 7, 97, 3, 89, 97, 90, 100, 36, 100, 98, 98],
                    },
                    {
                        name: 'Chaitanya',
                        target: 60,
                        scoreArray: [35, 6, 76, 53, 60, 75, 59, 13, 92, 93, 95, 81],
                    },
                    {
                        name: 'Kaine',
                        target: 78,
                        scoreArray: [91, 87, 12, 54, 99, 13, 80, 99, 24, 88, 59, 23],
                    },
                    {
                        name: 'Samuela',
                        target: 46,
                        scoreArray: [63, 96, 53, 46, 83, 16, 1, 20, 7, 0, 65, 73, 31, 75, 15],
                    },
                ],
            ],
            expected: 'Samuela',
        },
        {
            input: [
                [
                    {
                        name: 'Eng',
                        target: 50,
                        scoreArray: [20, 22, 91, 77, 44, 14, 60, 16, 50, 99, 60, 91],
                    },
                    {
                        name: 'Sabeen',
                        target: 54,
                        scoreArray: [75, 43, 7, 19, 67, 95, 3, 82, 10, 73, 4],
                    },
                    {
                        name: 'Jaydan',
                        target: 98,
                        scoreArray: [23, 61, 5, 77, 98, 13, 99, 99, 76, 85, 71],
                    },
                    {
                        name: 'Masson',
                        target: 68,
                        scoreArray: [87, 42, 19, 99, 23, 52, 77, 72, 54, 90],
                    },
                    {
                        name: 'Marvellous',
                        target: 59,
                        scoreArray: [29, 40, 61, 69, 54, 61, 25, 31, 9, 34, 23],
                    },
                    {
                        name: 'Cody-Lee',
                        target: 65,
                        scoreArray: [56, 96, 76, 23, 44, 24, 7, 41, 99, 10, 88, 31, 46, 89],
                    },
                    {
                        name: 'Jayden-Paul',
                        target: 57,
                        scoreArray: [78, 42, 94, 54, 51, 52, 12, 11, 25, 28, 51, 79],
                    },
                    {
                        name: 'Etinosa',
                        target: 90,
                        scoreArray: [91, 84, 91, 83, 11, 83, 22, 20, 92],
                    },
                ],
            ],
            expected: 'Eng',
        },
        {
            input: [
                [
                    {
                        name: 'Braeden',
                        target: 95,
                        scoreArray: [37, 97, 93, 99, 93, 70, 47, 98, 98, 85, 36, 96, 98, 99, 95, 98],
                    },
                    {
                        name: 'Ijay',
                        target: 98,
                        scoreArray: [59, 99, 99, 99, 98, 0, 100, 100, 1, 1, 30],
                    },
                    {
                        name: 'Humza',
                        target: 99,
                        scoreArray: [100, 100, 76, 99, 29, 71, 60, 100, 100, 7, 14, 61, 100],
                    },
                    {
                        name: 'Silas',
                        target: 76,
                        scoreArray: [28, 30, 31, 78, 0, 91, 26, 24, 14, 100, 34, 87, 54, 82],
                    },
                    {
                        name: 'Tobias',
                        target: 33,
                        scoreArray: [22, 6, 76, 0, 63, 45, 12, 18, 91, 30, 64, 10, 31, 69, 89, 15],
                    },
                    {
                        name: 'Dev',
                        target: 26,
                        scoreArray: [77, 60, 22, 9, 4, 0, 48, 75, 29, 3, 14, 95, 9],
                    },
                    {
                        name: 'Asim',
                        target: 74,
                        scoreArray: [41, 68, 49, 74, 80, 78, 22, 76, 11, 78, 16, 13],
                    },
                    {
                        name: 'Tiago',
                        target: 75,
                        scoreArray: [80, 87, 5, 35, 92, 10, 91, 76, 43, 28, 39, 33, 12, 13],
                    },
                ],
            ],
            expected: 'Braeden',
        },
        {
            input: [
                [
                    {
                        name: 'Kasper',
                        target: 59,
                        scoreArray: [21, 6, 65, 11, 99, 50, 39, 70, 50, 98, 0],
                    },
                    {
                        name: 'Daren',
                        target: 52,
                        scoreArray: [75, 43, 37, 90, 69, 2, 38, 1, 55, 72, 89],
                    },
                    {
                        name: 'Limo',
                        target: 67,
                        scoreArray: [72, 64, 0, 85, 90, 99, 62, 87, 15, 28, 32],
                    },
                    {
                        name: 'Lokesh',
                        target: 82,
                        scoreArray: [46, 97, 11, 21, 23, 95, 95, 15],
                    },
                    {
                        name: 'Colby',
                        target: 33,
                        scoreArray: [22, 9, 64, 25, 93, 2, 28, 29, 9],
                    },
                    {
                        name: 'Darach',
                        target: 29,
                        scoreArray: [22, 68, 28, 28, 51, 28, 12, 9, 24, 2, 23],
                    },
                ],
            ],
            expected: 'Daren',
        },
        {
            input: [
                [
                    {
                        name: 'Marvin',
                        target: 50,
                        scoreArray: [85, 78, 48, 92, 48, 4, 3, 32, 80, 1, 28, 67, 69],
                    },
                    {
                        name: 'Bharath',
                        target: 95,
                        scoreArray: [2, 99, 99, 32, 14, 97, 100, 75, 8, 97, 51],
                    },
                    {
                        name: 'Dillan',
                        target: 29,
                        scoreArray: [16, 70, 26, 20, 19, 62, 16, 19, 9],
                    },
                    {
                        name: 'Mir',
                        target: 54,
                        scoreArray: [13, 0, 82, 47, 4, 64, 53, 72, 17, 54, 93],
                    },
                    {
                        name: 'Gurveer',
                        target: 47,
                        scoreArray: [28, 13, 59, 85, 23, 11, 23, 28, 37],
                    },
                ],
            ],
            expected: 'Marvin',
        },
        {
            input: [
                [
                    {
                        name: 'Denzel',
                        target: 66,
                        scoreArray: [79, 74, 76, 38, 27, 49, 89, 85, 58, 72, 5, 93],
                    },
                    {
                        name: 'Enis',
                        target: 94,
                        scoreArray: [99, 3, 24, 98, 24, 7, 12, 97, 3, 100, 27, 28, 11, 97, 95, 99],
                    },
                    {
                        name: 'Maaz',
                        target: 97,
                        scoreArray: [98, 97, 59, 98, 100, 55, 87, 91, 30, 99, 86, 73, 99, 100],
                    },
                    {
                        name: 'Casey',
                        target: 30,
                        scoreArray: [42, 1, 99, 1, 26, 76, 20, 49, 12, 14, 0, 68],
                    },
                    {
                        name: 'Haider',
                        target: 99,
                        scoreArray: [100, 100, 93, 81, 85, 7, 56, 8, 100, 100, 40, 78, 83],
                    },
                    {
                        name: 'Ruben',
                        target: 70,
                        scoreArray: [91, 46, 35, 99, 82, 68, 72, 49, 44, 88, 17, 95, 74, 73, 22, 15, 42],
                    },
                    {
                        name: 'Tommi-Lee',
                        target: 73,
                        scoreArray: [81, 31, 72, 40, 21, 89, 80, 72, 18, 82],
                    },
                    {
                        name: 'Luciano',
                        target: 82,
                        scoreArray: [91, 40, 5, 88, 69, 84, 77, 93, 84, 94, 16],
                    },
                ],
            ],
            expected: 'Ruben',
        },
        {
            input: [
                [
                    {
                        name: 'Donnie',
                        target: 95,
                        scoreArray: [10, 46, 95, 10, 35, 95, 96, 77, 43, 95],
                    },
                    {
                        name: 'Kasra',
                        target: 63,
                        scoreArray: [10, 29, 90, 52, 71, 20, 66, 59, 69, 22, 4, 2, 60],
                    },
                    {
                        name: 'Muhammed',
                        target: 60,
                        scoreArray: [11, 20, 54, 84, 74, 64, 63, 7, 81, 60, 41, 38, 17],
                    },
                    {
                        name: 'Angel',
                        target: 69,
                        scoreArray: [36, 5, 76, 47, 99, 46, 17, 89, 0, 91, 70, 94],
                    },
                    {
                        name: 'Rheyden',
                        target: 80,
                        scoreArray: [24, 7, 81, 93, 95, 70, 83, 86, 30, 90, 66, 81, 43, 49, 74],
                    },
                    {
                        name: 'Rayaan',
                        target: 45,
                        scoreArray: [84, 64, 42, 68, 30, 62, 55, 91, 16, 16, 31],
                    },
                ],
            ],
            expected: 'Rheyden',
        },
        {
            input: [
                [
                    {
                        name: 'Maryk',
                        target: 44,
                        scoreArray: [55, 8, 16, 2, 91, 18, 71, 14, 51, 52, 13],
                    },
                    {
                        name: 'Olurotimi',
                        target: 36,
                        scoreArray: [28, 26, 31, 79, 82, 12, 32, 33, 28, 10, 21],
                    },
                    {
                        name: 'Lachlainn',
                        target: 35,
                        scoreArray: [6, 2, 24, 26, 21, 73, 9, 44, 86, 77, 10, 30],
                    },
                    {
                        name: 'Jaime',
                        target: 40,
                        scoreArray: [77, 29, 96, 56, 88, 17, 14, 0, 82, 99, 10, 6],
                    },
                    {
                        name: 'Sonni',
                        target: 81,
                        scoreArray: [90, 0, 27, 52, 94, 25, 36, 28, 93, 27, 95, 0, 60],
                    },
                ],
            ],
            expected: 'Jaime',
        },
        {
            input: [
                [
                    {
                        name: 'Darius',
                        target: 71,
                        scoreArray: [27, 45, 42, 2, 76, 83, 33, 87, 77, 71, 93, 77, 62, 84, 52, 36, 65],
                    },
                    {
                        name: 'Khizer',
                        target: 96,
                        scoreArray: [99, 61, 42, 97, 71, 99, 97, 98, 63, 99, 96, 9, 78],
                    },
                    {
                        name: 'Nevan',
                        target: 82,
                        scoreArray: [93, 100, 37, 57, 78, 53, 80, 18, 53, 86, 97],
                    },
                    {
                        name: 'Martin',
                        target: 47,
                        scoreArray: [50, 0, 58, 62, 16, 49, 30, 89, 15, 2, 61, 14, 36, 95, 36, 28],
                    },
                    {
                        name: 'Ceejay',
                        target: 47,
                        scoreArray: [88, 79, 80, 19, 47, 78, 6, 11, 33, 31, 51],
                    },
                    {
                        name: 'Rudy',
                        target: 47,
                        scoreArray: [90, 32, 74, 40, 57, 94, 8, 16, 74, 0],
                    },
                ],
            ],
            expected: 'Darius',
        },
        {
            input: [
                [
                    {
                        name: 'Lisandro',
                        target: 98,
                        scoreArray: [35, 70, 43, 99, 98, 100, 51, 8, 100],
                    },
                    {
                        name: 'Brodi',
                        target: 80,
                        scoreArray: [14, 82, 87, 15, 90, 87, 75, 81, 82, 94, 3, 66, 52],
                    },
                    {
                        name: "D'arcy",
                        target: 89,
                        scoreArray: [65, 2, 36, 95, 90, 87, 64, 96, 81, 67, 90, 60, 9, 91, 94, 100, 91],
                    },
                    {
                        name: 'Zoubaeir',
                        target: 73,
                        scoreArray: [43, 86, 92, 92, 67, 65, 15, 51, 44, 84, 89, 47, 44, 94],
                    },
                    {
                        name: 'Coban',
                        target: 87,
                        scoreArray: [32, 64, 97, 44, 41, 89, 51, 98, 97, 93],
                    },
                    {
                        name: 'Jardine',
                        target: 65,
                        scoreArray: [1, 18, 53, 81, 23, 81, 85, 18, 89],
                    },
                    {
                        name: 'Chrismedi',
                        target: 47,
                        scoreArray: [24, 47, 85, 42, 57, 13, 14, 78, 12, 99, 94, 98],
                    },
                ],
            ],
            expected: "D'arcy",
        },
    ],
    options: {
        type: 'JSON',
    },
};
