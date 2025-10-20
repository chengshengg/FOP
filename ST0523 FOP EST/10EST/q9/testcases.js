module.exports = {
    testcases: [
        {
            input: [
                [
                    { name: 'Zen', savings: [80, 65, 24, 116] },
                    { name: 'Yvonne', savings: [300] },
                ],
            ],
            expected: 'Yvonne',
        },
        {
            input: [
                [
                    { name: 'Alex', savings: [200, 300, 100] },
                    { name: 'Ben', savings: [500, 50] },
                    { name: 'Cara', savings: [300, 400, 100] },
                ],
            ],
            expected: 'Cara',
        },
        {
            input: [
                [
                    { name: 'Alex', savings: [200, 300, 100] },
                    { name: 'Ben', savings: [500, 500] },
                    { name: 'Cara', savings: [300, 400, 100] },
                ],
            ],
            expected: 'Ben',
        },
        {
            input: [
                [
                    { name: 'Alex', savings: [200, 300, 100, 500] },
                    { name: 'Ben', savings: [500, 500] },
                    { name: 'Cara', savings: [300, 400, 100] },
                ],
            ],
            expected: 'Alex',
        },
        {
            input: [
                [
                    { name: 'Zen', savings: [80, 65, 24, 116] },
                    { name: 'Yvonne', savings: [30] },
                ],
            ],
            expected: 'Zen',
        },
        {
            input: [
                [
                    {
                        name: 'Queen',
                        savings: [408, 212, 158, 303, 287, 341, 248],
                    },
                    { name: 'Kurt', savings: [446, 179, 267, 39, 150, 60] },
                    {
                        name: 'Mille',
                        savings: [457, 70, 71, 292, 46, 51, 195],
                    },
                    { name: 'Leo', savings: [442, 288, 46, 383, 34, 333] },
                ],
            ],
            expected: 'Queen',
        },
        {
            input: [
                [
                    { name: 'Ian', savings: [224, 152, 233, 176] },
                    {
                        name: 'Leo',
                        savings: [219, 15, 197, 275, 320, 474, 42],
                    },
                    {
                        name: 'Alex',
                        savings: [372, 244, 112, 179, 345, 343, 57],
                    },
                    { name: 'Mille', savings: [139, 118, 134, 163, 141, 279] },
                ],
            ],
            expected: 'Alex',
        },
        {
            input: [
                [
                    { name: 'Steve', savings: [240, 306, 220] },
                    { name: 'Ian', savings: [49, 256, 266, 249] },
                    { name: 'Raphael', savings: [318, 443, 245, 191, 224] },
                    { name: 'Jake', savings: [160, 58, 20, 94] },
                ],
            ],
            expected: 'Raphael',
        },
        {
            input: [
                [
                    { name: 'Hillary', savings: [266, 172, 26, 28] },
                    {
                        name: 'Tom',
                        savings: [205, 424, 482, 462, 497, 447, 42],
                    },
                    { name: 'Bob', savings: [18, 441, 177, 359, 17] },
                    { name: 'Dean', savings: [291, 290, 106, 71, 207, 281] },
                ],
            ],
            expected: 'Tom',
        },
        {
            input: [
                [
                    { name: 'Mille', savings: [106, 414, 437, 42, 87] },
                    { name: 'Eli', savings: [325, 473, 69, 146, 402, 70] },
                    { name: 'Kurt', savings: [282, 52, 200, 19, 58, 494] },
                    { name: 'Bob', savings: [62, 12, 451, 133, 424, 280] },
                ],
            ],
            expected: 'Eli',
        },
        {
            input: [
                [
                    {
                        name: 'Raphael',
                        savings: [500, 73, 72, 489, 49, 155, 273, 461],
                    },
                    { name: 'Jake', savings: [395, 201, 471, 360, 221] },
                    { name: 'Kurt', savings: [379, 319, 5, 95, 68, 134] },
                    { name: 'Mille', savings: [202, 298, 426, 476] },
                    {
                        name: 'Dean',
                        savings: [349, 1, 282, 211, 191, 326, 286, 275, 177, 144],
                    },
                    { name: 'Patrick', savings: [62, 10, 310, 377, 141] },
                ],
            ],
            expected: 'Dean',
        },
        {
            input: [
                [
                    { name: 'Steve', savings: [325, 373, 254, 430, 75] },
                    {
                        name: 'Gary',
                        savings: [463, 210, 99, 116, 469, 240, 413, 226, 323],
                    },
                    {
                        name: 'Patrick',
                        savings: [219, 34, 417, 424, 328, 226, 457, 16, 60, 306],
                    },
                    {
                        name: 'Jake',
                        savings: [187, 163, 497, 62, 15, 42, 369, 351],
                    },
                    { name: 'Hillary', savings: [424, 500, 383, 28, 173, 105] },
                    { name: 'Queen', savings: [47, 187, 436] },
                ],
            ],
            expected: 'Gary',
        },
        {
            input: [
                [
                    {
                        name: 'Ian',
                        savings: [109, 204, 157, 396, 485, 306, 8],
                    },
                    { name: 'Hillary', savings: [449, 492, 422, 2, 62, 386] },
                    { name: 'Eli', savings: [421, 157, 434, 342, 277] },
                    { name: 'Kurt', savings: [306, 163, 115, 107] },
                    {
                        name: 'Gary',
                        savings: [353, 233, 425, 156, 116, 482, 91, 104, 121, 347],
                    },
                    {
                        name: 'Raphael',
                        savings: [315, 57, 203, 491, 97, 190, 324, 486],
                    },
                ],
            ],
            expected: 'Gary',
        },
        {
            input: [
                [
                    {
                        name: 'Hillary',
                        savings: [437, 217, 17, 371, 373, 66, 482],
                    },
                    { name: 'Queen', savings: [335, 316, 279] },
                    {
                        name: 'Ian',
                        savings: [71, 474, 280, 222, 499, 488, 383, 60, 61, 454, 219],
                    },
                    {
                        name: 'Charlie',
                        savings: [103, 231, 150, 297, 295, 20, 279, 381, 177, 162, 88, 384],
                    },
                    { name: 'Mille', savings: [393, 408, 450] },
                    { name: 'Nancy', savings: [165, 190, 452, 275, 64, 465] },
                ],
            ],
            expected: 'Ian',
        },
        {
            input: [
                [
                    {
                        name: 'Hillary',
                        savings: [449, 24, 92, 434, 44, 323, 17],
                    },
                    { name: 'Tom', savings: [290, 257, 307, 285, 266, 245] },
                    { name: 'Jake', savings: [199, 279, 68, 86, 87, 286] },
                    {
                        name: 'Gary',
                        savings: [162, 306, 79, 231, 332, 353, 464],
                    },
                    {
                        name: 'Steve',
                        savings: [203, 472, 79, 83, 102, 142, 149],
                    },
                    {
                        name: 'Leo',
                        savings: [155, 7, 358, 188, 97, 361, 401, 203],
                    },
                ],
            ],
            expected: 'Gary',
        },
        {
            input: [
                [
                    {
                        name: 'Gary',
                        savings: [378, 908, 926, 579, 958, 929, 317, 492, 113, 907, 436, 733, 262, 363],
                    },
                    { name: 'Nancy', savings: [149, 693, 631, 415, 268, 796] },
                    {
                        name: 'Charlie',
                        savings: [128, 328, 488, 340, 563, 515, 422, 577, 673, 751],
                    },
                    {
                        name: 'Jake',
                        savings: [603, 672, 453, 966, 598, 128, 220, 992, 896, 228],
                    },
                    { name: 'Patrick', savings: [953, 112, 946] },
                    { name: 'Tom', savings: [591, 464, 600, 128] },
                    { name: 'Oreo', savings: [50, 574, 906, 567, 567] },
                    {
                        name: 'Ian',
                        savings: [199, 126, 995, 419, 772, 593, 93, 148, 669, 531, 809, 77, 774],
                    },
                    {
                        name: 'Hillary',
                        savings: [254, 561, 664, 572, 786, 814, 151, 489, 986, 679, 52, 58, 384, 937, 747],
                    },
                    {
                        name: 'Eli',
                        savings: [622, 432, 397, 742, 489, 502, 37, 471, 354, 856, 390, 162, 989],
                    },
                ],
            ],
            expected: 'Gary',
        },
        {
            input: [
                [
                    {
                        name: 'Bob',
                        savings: [417, 923, 486, 739, 255, 409, 92, 514, 726, 911, 39, 38, 710, 474, 320],
                    },
                    {
                        name: 'Tom',
                        savings: [321, 411, 697, 899, 402, 195, 658],
                    },
                    {
                        name: 'Nancy',
                        savings: [495, 920, 677, 744, 134, 49, 298, 938, 524, 925, 435, 907, 108, 556, 131, 720],
                    },
                    {
                        name: 'Alex',
                        savings: [325, 790, 232, 774, 458, 212, 157, 382, 456, 45, 993, 45, 43, 899],
                    },
                    {
                        name: 'Jake',
                        savings: [812, 582, 757, 786, 795, 730, 602, 238, 380, 819, 469, 600, 283, 580],
                    },
                    { name: 'Dean', savings: [222, 258, 393, 231] },
                    {
                        name: 'Eli',
                        savings: [415, 232, 635, 807, 870, 791, 96, 292, 869, 470, 959, 36],
                    },
                    {
                        name: 'Raphael',
                        savings: [419, 315, 1000, 734, 514, 569, 243],
                    },
                    {
                        name: 'Queen',
                        savings: [164, 814, 819, 302, 278, 469, 34, 856, 649],
                    },
                    {
                        name: 'Leo',
                        savings: [254, 847, 656, 804, 873, 497, 382],
                    },
                ],
            ],
            expected: 'Nancy',
        },
        {
            input: [
                [
                    { name: 'Kurt', savings: [774, 116, 713] },
                    {
                        name: 'Frank',
                        savings: [674, 646, 430, 265, 260, 868, 318, 866, 549],
                    },
                    {
                        name: 'Tom',
                        savings: [457, 388, 421, 430, 64, 876, 187, 628, 489, 852, 658],
                    },
                    { name: 'Patrick', savings: [552, 739, 284, 694, 714, 353] },
                    {
                        name: 'Raphael',
                        savings: [754, 507, 207, 387, 746, 417, 796, 736],
                    },
                    {
                        name: 'Bob',
                        savings: [220, 1, 744, 636, 76, 728, 369, 912, 251],
                    },
                    { name: 'Nancy', savings: [822, 782, 569, 590, 134, 543] },
                    {
                        name: 'Charlie',
                        savings: [382, 273, 467, 356, 690, 86, 672, 615, 414, 367, 626, 189, 641, 105],
                    },
                    {
                        name: 'Queen',
                        savings: [33, 276, 576, 866, 616, 190, 280, 840, 178, 723, 64, 519, 859, 427],
                    },
                    { name: 'Hillary', savings: [169, 636, 541, 452, 354] },
                ],
            ],
            expected: 'Queen',
        },
        {
            input: [
                [
                    {
                        name: 'Eli',
                        savings: [764, 795, 56, 615, 956, 886, 297, 261, 40, 481, 344, 188, 553, 820],
                    },
                    {
                        name: 'Patrick',
                        savings: [81, 599, 597, 991, 956, 337, 557, 54, 629, 390],
                    },
                    { name: 'Frank', savings: [783, 61, 898, 504, 446, 721] },
                    {
                        name: 'Gary',
                        savings: [636, 323, 74, 310, 643, 697, 965],
                    },
                    {
                        name: 'Alex',
                        savings: [536, 83, 58, 273, 475, 537, 693, 866, 802, 646, 601, 837],
                    },
                    {
                        name: 'Steve',
                        savings: [497, 137, 846, 312, 174, 12, 434, 863, 783, 240, 153],
                    },
                    {
                        name: 'Ian',
                        savings: [594, 431, 727, 485, 144, 852, 326, 909, 904, 112, 720, 762],
                    },
                    {
                        name: 'Kurt',
                        savings: [958, 126, 999, 925, 139, 143, 782, 801, 925, 185, 2, 45, 992, 533, 885, 790],
                    },
                    {
                        name: 'Nancy',
                        savings: [232, 576, 681, 254, 258, 779, 293, 760, 360],
                    },
                    {
                        name: 'Leo',
                        savings: [204, 763, 762, 505, 957, 821, 569, 182, 63, 671, 323, 844, 423, 601, 543, 823, 118],
                    },
                ],
            ],
            expected: 'Kurt',
        },
        {
            input: [
                [
                    {
                        name: 'Patrick',
                        savings: [305, 869, 542, 30, 893, 279, 517, 609, 666],
                    },
                    {
                        name: 'Alex',
                        savings: [951, 168, 634, 287, 154, 978, 486, 465, 853, 132, 555, 668, 960, 88, 275],
                    },
                    {
                        name: 'Jake',
                        savings: [894, 868, 788, 350, 642, 308, 420, 141, 603, 189],
                    },
                    {
                        name: 'Eli',
                        savings: [364, 816, 681, 309, 737, 850, 288, 461, 656, 658, 956, 191, 606, 441],
                    },
                    {
                        name: 'Charlie',
                        savings: [121, 864, 561, 462, 244, 102, 226, 102, 399, 69, 271, 315],
                    },
                    { name: 'Hillary', savings: [377, 841, 647, 137] },
                    {
                        name: 'Queen',
                        savings: [730, 553, 919, 914, 42, 692, 29, 409, 972, 605, 874],
                    },
                    {
                        name: 'Gary',
                        savings: [910, 727, 763, 947, 209, 495, 226, 503, 333, 95, 221],
                    },
                    {
                        name: 'Tom',
                        savings: [984, 704, 835, 299, 925, 482, 705, 12, 142, 826, 51, 33],
                    },
                    {
                        name: 'Dean',
                        savings: [243, 532, 921, 768, 712, 65, 871, 587, 359, 774, 146],
                    },
                ],
            ],
            expected: 'Eli',
        },
    ],
    options: {
        type: 'JSON',
    },
};
