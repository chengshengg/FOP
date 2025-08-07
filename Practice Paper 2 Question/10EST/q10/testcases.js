module.exports = {
    testcases: [
        {
            input: [
                [
                    { isSingle: true, spendings: [20, 50, 30] },
                    { isSingle: false, spendings: [100, 200] },
                    { isSingle: true, spendings: [10, 40] },
                ],
            ],
            expected: 150,
        },
        {
            input: [
                [
                    { isSingle: false, spendings: [300, 150] },
                    { isSingle: true, spendings: [40, 60, 100] },
                    { isSingle: true, spendings: [25] },
                    { isSingle: true, spendings: [80, 20] },
                ],
            ],
            expected: 325,
        },
        {
            input: [[{ isSingle: false, spendings: [10] }]],
            expected: 0,
        },
        {
            input: [[{ isSingle: false, spendings: [10, 20] }]],
            expected: 0,
        },
        {
            input: [[{ isSingle: true, spendings: [10, 20] }]],
            expected: 30,
        },
        {
            input: [
                [
                    { isSingle: true, spendings: [10, 20, 30] },
                    { isSingle: false, spendings: [10, 20] },
                ],
            ],
            expected: 60,
        },
        {
            input: [
                [
                    { isSingle: false, spendings: [10, 20, 30] },
                    { isSingle: true, spendings: [12, 23] },
                ],
            ],
            expected: 35,
        },
        {
            input: [
                [
                    { isSingle: false, spendings: [10, 20, 30] },
                    { isSingle: true, spendings: [12, 23] },
                    { isSingle: true, spendings: [35] },
                ],
            ],
            expected: 70,
        },
        {
            input: [
                [
                    { isSingle: true, spendings: [36] },
                    { isSingle: false, spendings: [10, 20, 30] },
                    { isSingle: true, spendings: [12, 23] },
                ],
            ],
            expected: 71,
        },
        {
            input: [
                [
                    { isSingle: true, spendings: [36] },
                    { isSingle: false, spendings: [10, 20, 30] },
                    { isSingle: true, spendings: [13, 24] },
                    { isSingle: false, spendings: [10, 20, 30] },
                ],
            ],
            expected: 73,
        },
        {
            input: [
                [
                    { isSingle: true, spendings: [36] },
                    { isSingle: false, spendings: [10, 20, 30] },
                    { isSingle: true, spendings: [13, 24] },
                    { isSingle: true, spendings: [1, 2, 3, 4, 5, 6] },
                    { isSingle: false, spendings: [10, 20, 30] },
                ],
            ],
            expected: 94,
        },
        {
            input: [
                [
                    { isSingle: true, spendings: [638, 740] },
                    { isSingle: false, spendings: [259] },
                    { isSingle: false, spendings: [569, 576, 336, 377] },
                    {
                        isSingle: true,
                        spendings: [
                            946, 42, 713, 72, 841, 329, 658, 937, 773, 665, 498, 909, 847, 333, 43, 116, 636, 164,
                        ],
                    },
                    { isSingle: true, spendings: [61, 888] },
                    {
                        isSingle: false,
                        spendings: [
                            34, 478, 795, 616, 30, 142, 586, 788, 387, 8, 393, 556, 631, 778, 28, 963, 564, 376,
                        ],
                    },
                ],
            ],
            expected: 11849,
        },
        {
            input: [
                [
                    {
                        isSingle: true,
                        spendings: [69, 769, 147, 5, 547, 459, 375, 595, 522, 442, 589, 724],
                    },
                    {
                        isSingle: false,
                        spendings: [415, 414, 44, 185, 620, 555, 583, 34, 601, 939, 11, 240, 554, 484],
                    },
                    {
                        isSingle: true,
                        spendings: [750, 569, 769, 295, 125, 442, 369, 74],
                    },
                    {
                        isSingle: false,
                        spendings: [724, 88, 780, 652, 65, 659, 879, 74, 422, 39, 865, 847, 72, 877],
                    },
                    { isSingle: true, spendings: [544, 178, 370, 123] },
                    { isSingle: true, spendings: [237] },
                    { isSingle: true, spendings: [174, 656, 356] },
                ],
            ],
            expected: 11274,
        },
        {
            input: [
                [
                    {
                        isSingle: true,
                        spendings: [
                            688, 721, 108, 87, 465, 722, 913, 130, 996, 910, 293, 269, 220, 871, 208, 413, 276, 399,
                        ],
                    },
                    {
                        isSingle: false,
                        spendings: [
                            261, 118, 17, 505, 561, 740, 48, 598, 865, 570, 15, 834, 851, 435, 361, 114, 557, 596,
                        ],
                    },
                    { isSingle: false, spendings: [84, 292] },
                    { isSingle: false, spendings: [27, 313] },
                    {
                        isSingle: false,
                        spendings: [94, 97, 602, 503, 856, 311, 734, 374, 17],
                    },
                    {
                        isSingle: false,
                        spendings: [13, 639, 498, 637, 914, 196, 375, 733],
                    },
                ],
            ],
            expected: 8689,
        },
        {
            input: [
                [
                    {
                        isSingle: false,
                        spendings: [
                            748, 238, 55, 475, 56, 645, 594, 692, 883, 745, 405, 895, 146, 108, 100, 529, 287, 550, 411,
                        ],
                    },
                    {
                        isSingle: true,
                        spendings: [704, 559, 520, 916, 894, 11, 27, 23, 353, 538, 608, 608, 736, 80, 993, 933, 655],
                    },
                    {
                        isSingle: false,
                        spendings: [591, 76, 332, 372, 2, 207, 579, 928, 704, 981, 715, 249],
                    },
                    {
                        isSingle: false,
                        spendings: [669, 381, 659, 772, 223, 961],
                    },
                    {
                        isSingle: true,
                        spendings: [834, 672, 201, 753, 630, 915, 995, 261, 197, 146],
                    },
                    {
                        isSingle: true,
                        spendings: [468, 46, 537, 138, 682, 733, 298, 742, 210, 423, 45],
                    },
                    {
                        isSingle: true,
                        spendings: [494, 298, 125, 386, 260, 702, 495, 915, 502, 881, 161, 435],
                    },
                    {
                        isSingle: true,
                        spendings: [
                            681, 361, 446, 868, 566, 236, 680, 530, 855, 934, 902, 455, 491, 756, 402, 387, 547, 210,
                            360,
                        ],
                    },
                    {
                        isSingle: true,
                        spendings: [180, 890, 628, 852, 57, 112, 464, 309, 645],
                    },
                ],
            ],
            expected: 39542,
        },
        {
            input: [
                [
                    {
                        isSingle: false,
                        spendings: [960, 100, 593, 627, 356, 929, 742],
                    },
                    { isSingle: false, spendings: [459, 580] },
                    {
                        isSingle: false,
                        spendings: [77, 309, 399, 238, 861, 156, 441, 3, 495, 801, 803, 338],
                    },
                    {
                        isSingle: true,
                        spendings: [
                            348, 654, 634, 419, 620, 838, 156, 8, 665, 802, 431, 623, 62, 871, 507, 342, 587, 377, 152,
                        ],
                    },
                    {
                        isSingle: true,
                        spendings: [654, 724, 63, 270, 87, 269, 368, 25, 595, 50, 569, 796, 117, 453, 94],
                    },
                    {
                        isSingle: false,
                        spendings: [676, 106, 11, 775, 805, 378, 346],
                    },
                    {
                        isSingle: true,
                        spendings: [792, 100, 970, 845, 370, 8, 979, 887, 896, 234, 794],
                    },
                    { isSingle: false, spendings: [10, 617, 919, 809] },
                    {
                        isSingle: false,
                        spendings: [942, 991, 441, 771, 455, 150, 895, 11, 762, 293, 429, 622, 28, 169],
                    },
                    {
                        isSingle: false,
                        spendings: [
                            594, 852, 752, 662, 977, 840, 470, 474, 766, 199, 966, 920, 512, 309, 156, 341, 503, 742,
                            733,
                        ],
                    },
                    {
                        isSingle: false,
                        spendings: [922, 824, 494, 511, 172, 922],
                    },
                ],
            ],
            expected: 21105,
        },
        {
            input: [
                [
                    { isSingle: false, spendings: [776, 189, 3, 63, 164, 58] },
                    {
                        isSingle: true,
                        spendings: [840, 542, 195, 569, 655, 585, 514, 727, 808, 586, 921, 34, 703, 864],
                    },
                    {
                        isSingle: false,
                        spendings: [206, 900, 795, 405, 239, 61, 766, 757, 352, 927, 656, 151, 111],
                    },
                    { isSingle: true, spendings: [828, 209, 291, 176, 94] },
                    {
                        isSingle: true,
                        spendings: [782, 234, 595, 974, 594, 689, 493, 991, 284, 222, 575, 444, 361, 92, 482],
                    },
                    {
                        isSingle: true,
                        spendings: [
                            686, 915, 446, 9, 201, 895, 338, 34, 605, 313, 631, 722, 573, 895, 515, 822, 941, 704, 855,
                        ],
                    },
                    {
                        isSingle: true,
                        spendings: [406, 361, 31, 634, 162, 897, 407, 448, 631, 842, 233, 141, 873, 626],
                    },
                    { isSingle: false, spendings: [40, 941] },
                    {
                        isSingle: true,
                        spendings: [754, 990, 360, 660, 363, 839, 676, 926, 842, 159, 864, 112, 127, 256],
                    },
                ],
            ],
            expected: 43673,
        },
        {
            input: [
                [
                    {
                        isSingle: true,
                        spendings: [375, 475, 757, 35, 489, 724, 66, 386, 294, 708, 166, 944, 892, 419, 390, 286],
                    },
                    { isSingle: false, spendings: [116] },
                    { isSingle: false, spendings: [974, 811, 169, 599, 327] },
                    {
                        isSingle: true,
                        spendings: [
                            993, 540, 824, 727, 764, 730, 62, 13, 173, 371, 697, 884, 837, 363, 177, 858, 289, 397, 48,
                        ],
                    },
                    {
                        isSingle: false,
                        spendings: [471, 677, 691, 457, 482, 472, 39, 611, 365, 766],
                    },
                    { isSingle: true, spendings: [727, 684, 906, 989, 295] },
                    {
                        isSingle: false,
                        spendings: [245, 766, 140, 838, 477, 314, 437, 695, 175, 446],
                    },
                    { isSingle: true, spendings: [274, 830, 37, 919, 516] },
                    { isSingle: false, spendings: [515, 381, 244] },
                    {
                        isSingle: true,
                        spendings: [435, 539, 18, 463, 686, 673, 670, 818, 689],
                    },
                    {
                        isSingle: false,
                        spendings: [947, 990, 471, 446, 657, 923, 132, 558, 887, 482, 309, 480, 639, 208],
                    },
                    {
                        isSingle: false,
                        spendings: [636, 962, 531, 963, 915, 920, 894, 292, 489, 782, 448, 425, 837, 213, 321, 106],
                    },
                    {
                        isSingle: false,
                        spendings: [504, 22, 968, 732, 375, 540, 814, 375, 242, 882, 360, 683],
                    },
                ],
            ],
            expected: 28321,
        },
        {
            input: [
                [
                    { isSingle: false, spendings: [566, 601] },
                    {
                        isSingle: true,
                        spendings: [518, 420, 436, 178, 840, 823, 169, 965, 805],
                    },
                    {
                        isSingle: false,
                        spendings: [1000, 961, 872, 364, 399, 927, 782, 519, 311, 249, 490, 484, 241, 753],
                    },
                    {
                        isSingle: false,
                        spendings: [893, 811, 814, 848, 443, 925, 249],
                    },
                    {
                        isSingle: false,
                        spendings: [469, 82, 464, 407, 488, 724, 416, 963, 472, 99, 33, 321, 145, 416, 432, 926],
                    },
                    {
                        isSingle: false,
                        spendings: [260, 275, 291, 588, 841, 462, 973, 406, 949],
                    },
                    {
                        isSingle: false,
                        spendings: [
                            758, 775, 522, 436, 546, 779, 604, 973, 348, 918, 900, 61, 478, 11, 771, 904, 848, 116,
                        ],
                    },
                    { isSingle: true, spendings: [712, 416, 798] },
                    {
                        isSingle: false,
                        spendings: [464, 390, 442, 138, 885, 250, 307, 427, 300],
                    },
                ],
            ],
            expected: 7080,
        },
        {
            input: [
                [
                    {
                        isSingle: true,
                        spendings: [228, 435, 418, 294, 439, 679, 735, 998, 269, 436, 468, 471, 24, 16, 184, 747],
                    },
                    {
                        isSingle: false,
                        spendings: [377, 809, 839, 867, 418, 495],
                    },
                    { isSingle: true, spendings: [991, 176, 707, 582] },
                    { isSingle: false, spendings: [167, 486, 688, 626, 176] },
                    {
                        isSingle: false,
                        spendings: [
                            476, 870, 712, 403, 511, 858, 574, 315, 836, 998, 702, 223, 194, 426, 420, 32, 733, 660,
                        ],
                    },
                    {
                        isSingle: true,
                        spendings: [
                            386, 508, 675, 956, 339, 888, 413, 1000, 166, 687, 836, 322, 828, 73, 324, 519, 784, 939,
                            826,
                        ],
                    },
                    {
                        isSingle: false,
                        spendings: [566, 721, 18, 73, 255, 520, 478, 169, 985, 470],
                    },
                    { isSingle: false, spendings: [822, 907, 80, 937, 694] },
                    {
                        isSingle: false,
                        spendings: [380, 538, 638, 572, 540, 213, 67, 592],
                    },
                    {
                        isSingle: true,
                        spendings: [325, 784, 446, 634, 915, 457, 788],
                    },
                    {
                        isSingle: false,
                        spendings: [712, 545, 240, 710, 475, 161, 335, 260, 732, 356, 110, 186, 889],
                    },
                    { isSingle: false, spendings: [732, 837] },
                    {
                        isSingle: false,
                        spendings: [325, 910, 843, 784, 111, 936, 486, 467, 155, 871, 284, 731, 944],
                    },
                    {
                        isSingle: true,
                        spendings: [82, 497, 621, 655, 991, 145, 683],
                    },
                ],
            ],
            expected: 28789,
        },
    ],
    options: {
        type: 'JSON',
    },
};
