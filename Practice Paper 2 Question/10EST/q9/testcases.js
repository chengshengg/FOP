module.exports = {
    testcases: [
        {
            input: [
                [
                    { name: 'Zara', countriesVisited: ['Japan', 'Korea', 'France'] },
                    { name: 'Leo', countriesVisited: ['Canada'] },
                    { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] },
                ],
            ],
            expected: { name: 'Maya', countriesVisited: ['USA', 'Italy', 'Spain', 'Iceland'] },
        },
        {
            input: [
                [
                    { name: 'Ruru', countriesVisited: ['Singapore'] },
                    { name: 'Sama', countriesVisited: [] },
                ],
            ],
            expected: { name: 'Ruru', countriesVisited: ['Singapore'] },
        },
        {
            input: [
                [
                    { name: 'Daksh', countriesVisited: [] },
                    { name: 'Harvinder', countriesVisited: ['Brazil'] },
                    { name: 'Ryan', countriesVisited: [] },
                    { name: 'Dyllon', countriesVisited: ['Qatar'] },
                    { name: 'Crawford', countriesVisited: ['Egypt'] },
                    { name: 'Eoghan', countriesVisited: [] },
                    {
                        name: 'Dawson',
                        countriesVisited: ['Maldives', 'Nauru', 'Puerto Rico'],
                    },
                    { name: 'Baley', countriesVisited: ['Guatemala'] },
                ],
            ],
            expected: {
                name: 'Dawson',
                countriesVisited: ['Maldives', 'Nauru', 'Puerto Rico'],
            },
        },
        {
            input: [
                [
                    { name: 'Tymon', countriesVisited: [] },
                    { name: 'Alasdair', countriesVisited: [] },
                    { name: 'Bret', countriesVisited: ['Luxembourg'] },
                    { name: 'Remo', countriesVisited: ['Zambia', 'Panama'] },
                    { name: 'Keo', countriesVisited: [] },
                    {
                        name: 'Badr',
                        countriesVisited: ['France', 'Palau', 'Kazakhstan'],
                    },
                ],
            ],
            expected: {
                name: 'Badr',
                countriesVisited: ['France', 'Palau', 'Kazakhstan'],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Reagan',
                        countriesVisited: ['Isle of Man', 'Guyana', 'Nicaragua'],
                    },
                    { name: 'Riach', countriesVisited: [] },
                    {
                        name: 'Jamie',
                        countriesVisited: ['Bosnia and Herzegovina', 'Djibouti'],
                    },
                    { name: 'Connor-David', countriesVisited: ['Anguilla'] },
                    { name: 'Zander', countriesVisited: ['Brazil', 'Belgium'] },
                    {
                        name: 'Andreas',
                        countriesVisited: ['Sri Lanka', 'Mozambique'],
                    },
                    { name: 'Dalong', countriesVisited: ['Jamaica', 'Libya'] },
                    { name: 'Hector', countriesVisited: [] },
                    { name: 'Jaime', countriesVisited: ['Kazakhstan', 'Mali'] },
                ],
            ],
            expected: {
                name: 'Reagan',
                countriesVisited: ['Isle of Man', 'Guyana', 'Nicaragua'],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Finnen',
                        countriesVisited: ['Lebanon', 'Heard Island and McDonald Islands', 'Greenland', 'Curaçao'],
                    },
                    {
                        name: 'Bobby',
                        countriesVisited: ['Tonga', 'Jamaica', 'Turkmenistan', 'South Africa', 'Egypt', 'Paraguay'],
                    },
                    {
                        name: 'Rhyon',
                        countriesVisited: ['Suriname', 'Nauru', 'Serbia', 'Ghana'],
                    },
                    {
                        name: 'Sofian',
                        countriesVisited: ['Norfolk Island', 'Christmas Island', 'Egypt', 'Papua New Guinea', 'Serbia'],
                    },
                    {
                        name: 'Zacharie',
                        countriesVisited: ['San Marino', 'Zimbabwe', 'Saint Helena, Ascension and Tristan da Cunha'],
                    },
                    {
                        name: 'Jaidyn',
                        countriesVisited: ['Panama', 'Macao', 'Bouvet Island', 'Hungary', 'Uzbekistan'],
                    },
                ],
            ],
            expected: {
                name: 'Bobby',
                countriesVisited: ['Tonga', 'Jamaica', 'Turkmenistan', 'South Africa', 'Egypt', 'Paraguay'],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Chang-Ha',
                        countriesVisited: ['Yemen', 'Nepal', 'Malawi'],
                    },
                    {
                        name: 'Fearghus',
                        countriesVisited: ['Tokelau', 'Monaco', 'Kazakhstan'],
                    },
                    {
                        name: 'Daren',
                        countriesVisited: ['Martinique', 'Serbia', 'Equatorial Guinea', 'Denmark'],
                    },
                    {
                        name: 'Talorcan',
                        countriesVisited: [
                            'Lesotho',
                            'Samoa',
                            'Trinidad and Tobago',
                            'Belarus',
                            'Lebanon',
                            'Albania',
                            'Monaco',
                            'Saint Pierre and Miquelon',
                        ],
                    },
                    {
                        name: 'Kealon',
                        countriesVisited: [
                            'Colombia',
                            'Tanzania, United Republic of',
                            'South Africa',
                            'Canada',
                            'Guinea',
                            'Jersey',
                            'Canada',
                        ],
                    },
                    {
                        name: 'Rhuairidh',
                        countriesVisited: [
                            'Kuwait',
                            'Pakistan',
                            'Palestine, State of',
                            'France',
                            'Kyrgyzstan',
                            'Finland',
                            'Western Sahara',
                        ],
                    },
                    {
                        name: 'Nicky',
                        countriesVisited: ['Uganda', 'Taiwan', 'Ethiopia', 'Canada'],
                    },
                    {
                        name: 'Ernie-Jacks',
                        countriesVisited: [
                            'Vietnam',
                            'Senegal',
                            'Mongolia',
                            'Papua New Guinea',
                            'Saint Pierre and Miquelon',
                            'Uzbekistan',
                            'Barbados',
                        ],
                    },
                    {
                        name: 'Laurence',
                        countriesVisited: [
                            'Brazil',
                            'South Georgia and the South Sandwich Islands',
                            'Slovakia',
                            'Timor-Leste',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Talorcan',
                countriesVisited: [
                    'Lesotho',
                    'Samoa',
                    'Trinidad and Tobago',
                    'Belarus',
                    'Lebanon',
                    'Albania',
                    'Monaco',
                    'Saint Pierre and Miquelon',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Ronin',
                        countriesVisited: [
                            'China',
                            'Malta',
                            'Thailand',
                            'Mexico',
                            'Singapore',
                            'Croatia',
                            'Croatia',
                            'Saudi Arabia',
                        ],
                    },
                    {
                        name: 'Hayden',
                        countriesVisited: ['Turkey', 'El Salvador', 'Belize', 'Tunisia', 'Argentina', 'Argentina'],
                    },
                    {
                        name: 'Keaton',
                        countriesVisited: [
                            'Indonesia',
                            'Heard Island and McDonald Islands',
                            'Georgia',
                            'Romania',
                            'Samoa',
                            'Papua New Guinea',
                        ],
                    },
                    {
                        name: 'Mitchell',
                        countriesVisited: ['Guyana', 'Djibouti', 'Somalia', 'Estonia'],
                    },
                    {
                        name: 'Leyton',
                        countriesVisited: ['New Caledonia', 'Guatemala', 'Lebanon', 'Libya'],
                    },
                ],
            ],
            expected: {
                name: 'Ronin',
                countriesVisited: [
                    'China',
                    'Malta',
                    'Thailand',
                    'Mexico',
                    'Singapore',
                    'Croatia',
                    'Croatia',
                    'Saudi Arabia',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Alphonse',
                        countriesVisited: ['Uzbekistan', 'Aruba', 'Guatemala'],
                    },
                    {
                        name: 'Fikret',
                        countriesVisited: ['Pitcairn', 'Zambia', 'Anguilla', 'Jersey', 'Iraq'],
                    },
                    {
                        name: 'Prabhjoit',
                        countriesVisited: ['Croatia', 'Tokelau', 'Saint Barthélemy', 'French Polynesia'],
                    },
                    {
                        name: 'Shaye',
                        countriesVisited: [
                            'Wallis and Futuna',
                            'Pakistan',
                            'Ireland',
                            'Svalbard and Jan Mayen',
                            'Canada',
                            'Bulgaria',
                        ],
                    },
                    {
                        name: 'Arafat',
                        countriesVisited: ['Guadeloupe', 'Maldives', 'Pitcairn', 'Guadeloupe'],
                    },
                    {
                        name: 'Lennex',
                        countriesVisited: [
                            'Burkina Faso',
                            'South Georgia and the South Sandwich Islands',
                            'Chile',
                            'Isle of Man',
                            'Costa Rica',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Shaye',
                countriesVisited: [
                    'Wallis and Futuna',
                    'Pakistan',
                    'Ireland',
                    'Svalbard and Jan Mayen',
                    'Canada',
                    'Bulgaria',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Satveer',
                        countriesVisited: ['Malaysia', 'Sierra Leone', 'Luxembourg'],
                    },
                    {
                        name: 'Izaak',
                        countriesVisited: ['Norway', 'Guam', 'Hong Kong', 'Afghanistan'],
                    },
                    {
                        name: 'Michael',
                        countriesVisited: ['Afghanistan', 'Lithuania', 'Palau', 'New Zealand'],
                    },
                    {
                        name: 'Kashif',
                        countriesVisited: [
                            'Mexico',
                            'Germany',
                            'Belgium',
                            'Guatemala',
                            'Palestine, State of',
                            'Liechtenstein',
                            'Bonaire, Sint Eustatius and Saba',
                        ],
                    },
                    {
                        name: 'Brajan',
                        countriesVisited: ['Eritrea', 'Timor-Leste', 'Christmas Island', 'El Salvador', 'Senegal'],
                    },
                    {
                        name: 'Kristofer',
                        countriesVisited: [
                            'Canada',
                            'South Georgia and the South Sandwich Islands',
                            'Cyprus',
                            'Pitcairn',
                            'Guinea-Bissau',
                            'New Zealand',
                            'Trinidad and Tobago',
                        ],
                    },
                    {
                        name: 'Orlando',
                        countriesVisited: ['Cyprus', 'Eritrea', 'Palau', 'Mexico', 'Monaco', 'Montenegro'],
                    },
                    {
                        name: 'Carrick',
                        countriesVisited: [
                            'Ecuador',
                            'Sierra Leone',
                            'Guinea-Bissau',
                            'Aruba',
                            'Palau',
                            'Sao Tome and Principe',
                            'Wallis and Futuna',
                            'Canada',
                        ],
                    },
                    {
                        name: 'Jazib',
                        countriesVisited: [
                            'Kiribati',
                            'Montenegro',
                            'Isle of Man',
                            'Sri Lanka',
                            'Iceland',
                            'Curaçao',
                            'Hong Kong',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Carrick',
                countriesVisited: [
                    'Ecuador',
                    'Sierra Leone',
                    'Guinea-Bissau',
                    'Aruba',
                    'Palau',
                    'Sao Tome and Principe',
                    'Wallis and Futuna',
                    'Canada',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Bailey',
                        countriesVisited: ['Malaysia', 'Sierra Leone', 'Finland', 'Andorra'],
                    },
                    {
                        name: 'Russell',
                        countriesVisited: ['Cambodia', 'Togo', 'Pakistan', 'Monaco'],
                    },
                    {
                        name: 'Aled',
                        countriesVisited: [
                            'Guatemala',
                            'Pakistan',
                            'Portugal',
                            'Jordan',
                            'China',
                            'Vietnam',
                            'Pakistan',
                        ],
                    },
                    {
                        name: 'Tylar',
                        countriesVisited: [
                            'Cyprus',
                            'Saudi Arabia',
                            'El Salvador',
                            'New Zealand',
                            'Saint Pierre and Miquelon',
                            'Macao',
                        ],
                    },
                    {
                        name: 'Cadyn',
                        countriesVisited: ['Saint Vincent and the Grenadines', 'Nepal', 'Andorra'],
                    },
                    {
                        name: 'Joash',
                        countriesVisited: ['Cabo Verde', 'Tunisia', 'Niue', 'Bahrain', 'Zimbabwe'],
                    },
                    {
                        name: 'Rafi',
                        countriesVisited: ['Greece', 'Equatorial Guinea', 'Malta', 'Ethiopia', 'Sweden', 'Martinique'],
                    },
                    {
                        name: 'Lex',
                        countriesVisited: ['Slovenia', 'Guinea-Bissau', 'Saudi Arabia', 'Egypt'],
                    },
                ],
            ],
            expected: {
                name: 'Aled',
                countriesVisited: ['Guatemala', 'Pakistan', 'Portugal', 'Jordan', 'China', 'Vietnam', 'Pakistan'],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Rehaan',
                        countriesVisited: ['Guam', 'Bahrain', 'Cameroon'],
                    },
                    {
                        name: 'Farren',
                        countriesVisited: ['Croatia', 'Bouvet Island', 'Ireland', 'Yemen', 'Tunisia'],
                    },
                    {
                        name: 'Jerry',
                        countriesVisited: ['Timor-Leste', 'Senegal', 'Kiribati'],
                    },
                    {
                        name: 'Vinh',
                        countriesVisited: ['Montenegro', 'Brunei Darussalam', 'Kenya', 'China'],
                    },
                    {
                        name: 'Adrien',
                        countriesVisited: [
                            'Zambia',
                            'Nauru',
                            'Colombia',
                            'Saint Barthélemy',
                            'Papua New Guinea',
                            'Singapore',
                        ],
                    },
                    {
                        name: 'Salman',
                        countriesVisited: ['Republic of North Macedonia', 'Albania', 'Latvia'],
                    },
                    {
                        name: 'Gil',
                        countriesVisited: ['Croatia', 'Albania', 'Yemen'],
                    },
                ],
            ],
            expected: {
                name: 'Adrien',
                countriesVisited: ['Zambia', 'Nauru', 'Colombia', 'Saint Barthélemy', 'Papua New Guinea', 'Singapore'],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Aryan',
                        countriesVisited: ['Azerbaijan', 'Ukraine', 'Senegal', 'Albania', 'Guam'],
                    },
                    {
                        name: 'Sheriff',
                        countriesVisited: ['Saint Helena, Ascension and Tristan da Cunha', 'Martinique', 'Chile'],
                    },
                    {
                        name: 'Aref',
                        countriesVisited: ['Estonia', 'Indonesia', 'Saudi Arabia', 'Croatia'],
                    },
                    {
                        name: 'Hubert',
                        countriesVisited: ['Dominica', 'Saint Helena, Ascension and Tristan da Cunha', 'Maldives'],
                    },
                    {
                        name: 'Badr',
                        countriesVisited: ['Thailand', 'Romania', 'Brunei Darussalam', 'Benin', 'Poland'],
                    },
                    {
                        name: 'Samir',
                        countriesVisited: ['South Georgia and the South Sandwich Islands', 'Canada', 'Mauritius'],
                    },
                    {
                        name: 'Baxter',
                        countriesVisited: ['Guam', 'San Marino', 'India'],
                    },
                    {
                        name: 'Zakaria',
                        countriesVisited: [
                            'Libya',
                            'Sao Tome and Principe',
                            'Libya',
                            'Malaysia',
                            'Saint Vincent and the Grenadines',
                            'Guyana',
                        ],
                    },
                    {
                        name: 'Jeremy',
                        countriesVisited: ['Wallis and Futuna', 'Aruba', 'Wallis and Futuna', 'Belgium', 'Denmark'],
                    },
                ],
            ],
            expected: {
                name: 'Zakaria',
                countriesVisited: [
                    'Libya',
                    'Sao Tome and Principe',
                    'Libya',
                    'Malaysia',
                    'Saint Vincent and the Grenadines',
                    'Guyana',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Lochlann',
                        countriesVisited: ['Senegal', 'Guatemala', 'Greenland', 'Qatar'],
                    },
                    {
                        name: 'Zhong',
                        countriesVisited: ['Eritrea', "Côte d'Ivoire", 'Jersey', 'Qatar', 'South Africa'],
                    },
                    {
                        name: 'Archibald',
                        countriesVisited: [
                            'Iceland',
                            'Latvia',
                            'Åland Islands',
                            'Mongolia',
                            'Taiwan',
                            'Grenada',
                            'Bulgaria',
                            'Egypt',
                            'Palau',
                        ],
                    },
                    {
                        name: 'Alex',
                        countriesVisited: ['Myanmar', 'Senegal', 'Saint Kitts and Nevis', 'Vanuatu'],
                    },
                    {
                        name: 'Olaf',
                        countriesVisited: [
                            'Guinea-Bissau',
                            'Azerbaijan',
                            'Czechia',
                            'Bouvet Island',
                            'Equatorial Guinea',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Archibald',
                countriesVisited: [
                    'Iceland',
                    'Latvia',
                    'Åland Islands',
                    'Mongolia',
                    'Taiwan',
                    'Grenada',
                    'Bulgaria',
                    'Egypt',
                    'Palau',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Ryese',
                        countriesVisited: ['Namibia', 'Eswatini', 'Bouvet Island', 'Nepal', 'Niue'],
                    },
                    {
                        name: 'Pierre-Antoine',
                        countriesVisited: [
                            'Monaco',
                            'Trinidad and Tobago',
                            'France',
                            'Mauritius',
                            'Heard Island and McDonald Islands',
                            'Lebanon',
                            'Mauritius',
                        ],
                    },
                    {
                        name: 'Davi',
                        countriesVisited: ['Kazakhstan', 'Ireland', 'Latvia', 'Trinidad and Tobago'],
                    },
                    {
                        name: 'Boedyn',
                        countriesVisited: [
                            'Saint Pierre and Miquelon',
                            'Iraq',
                            'Zimbabwe',
                            'Wallis and Futuna',
                            'Kuwait',
                            'Guinea',
                            'Isle of Man',
                            'Western Sahara',
                        ],
                    },
                    {
                        name: 'Emmet',
                        countriesVisited: ['Saudi Arabia', 'Pitcairn', 'Gibraltar', 'Slovenia', 'Tuvalu', 'Tunisia'],
                    },
                    {
                        name: 'Pietro',
                        countriesVisited: [
                            'Guyana',
                            'Saint Helena, Ascension and Tristan da Cunha',
                            'Martinique',
                            'Samoa',
                            'Vanuatu',
                            'Italy',
                            'Tunisia',
                            'Macao',
                            'Christmas Island',
                        ],
                    },
                    {
                        name: 'Dissanayake',
                        countriesVisited: [
                            'Sri Lanka',
                            'Andorra',
                            'Ecuador',
                            'Bahrain',
                            'Namibia',
                            'Equatorial Guinea',
                            'Tanzania, United Republic of',
                        ],
                    },
                    {
                        name: 'Hayden',
                        countriesVisited: [
                            'Oman',
                            'French Guiana',
                            'Honduras',
                            'Tunisia',
                            'Nigeria',
                            'Botswana',
                            'Réunion',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Pietro',
                countriesVisited: [
                    'Guyana',
                    'Saint Helena, Ascension and Tristan da Cunha',
                    'Martinique',
                    'Samoa',
                    'Vanuatu',
                    'Italy',
                    'Tunisia',
                    'Macao',
                    'Christmas Island',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Mikhail',
                        countriesVisited: [
                            'Tunisia',
                            'Namibia',
                            'Trinidad and Tobago',
                            'Australia',
                            'Croatia',
                            'Tajikistan',
                            'Yemen',
                            'Guyana',
                            'Réunion',
                            'Barbados',
                            'Somalia',
                            'Mauritania',
                            'Antigua and Barbuda',
                            'Costa Rica',
                        ],
                    },
                    {
                        name: 'Eamon',
                        countriesVisited: [
                            'Curaçao',
                            'Puerto Rico',
                            'French Polynesia',
                            'Finland',
                            'New Zealand',
                            'Bahrain',
                            'Tokelau',
                        ],
                    },
                    {
                        name: 'Nico',
                        countriesVisited: [
                            'Israel',
                            'Japan',
                            'Angola',
                            'Pitcairn',
                            'Paraguay',
                            'Mexico',
                            'San Marino',
                            'Dominica',
                            'San Marino',
                            'Uruguay',
                        ],
                    },
                    {
                        name: 'Dennin',
                        countriesVisited: [
                            'Jordan',
                            'South Georgia and the South Sandwich Islands',
                            'Morocco',
                            'Jersey',
                            'Anguilla',
                        ],
                    },
                    {
                        name: 'Johnathan',
                        countriesVisited: [
                            'Switzerland',
                            'India',
                            'South Sudan',
                            'Bosnia and Herzegovina',
                            'Norway',
                            'Samoa',
                            'Belarus',
                            'Seychelles',
                            'Greece',
                            'Chile',
                            'Chile',
                            'South Sudan',
                        ],
                    },
                    {
                        name: 'Oliver',
                        countriesVisited: [
                            'Hong Kong',
                            'Qatar',
                            'Indonesia',
                            'Bangladesh',
                            'Albania',
                            'Guinea-Bissau',
                            'Anguilla',
                            'Greece',
                            'Christmas Island',
                            'Switzerland',
                            'Nauru',
                        ],
                    },
                    {
                        name: 'Dolan',
                        countriesVisited: [
                            'Libya',
                            'Estonia',
                            'Georgia',
                            'Estonia',
                            'Liberia',
                            'Bangladesh',
                            'Germany',
                            'Antarctica',
                            'Costa Rica',
                            'Ecuador',
                            'Latvia',
                            'Sierra Leone',
                            'Indonesia',
                        ],
                    },
                    {
                        name: 'Geoffrey',
                        countriesVisited: ['Morocco', 'Indonesia', 'Ireland', 'Maldives', 'Mexico', 'Bouvet Island'],
                    },
                ],
            ],
            expected: {
                name: 'Mikhail',
                countriesVisited: [
                    'Tunisia',
                    'Namibia',
                    'Trinidad and Tobago',
                    'Australia',
                    'Croatia',
                    'Tajikistan',
                    'Yemen',
                    'Guyana',
                    'Réunion',
                    'Barbados',
                    'Somalia',
                    'Mauritania',
                    'Antigua and Barbuda',
                    'Costa Rica',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Maros',
                        countriesVisited: [
                            'Slovakia',
                            'Mali',
                            'Saint Lucia',
                            'India',
                            'Ireland',
                            'Tonga',
                            'Liechtenstein',
                            'Solomon Islands',
                            'Colombia',
                            'Bulgaria',
                        ],
                    },
                    {
                        name: 'Zaak',
                        countriesVisited: [
                            'France',
                            'Vietnam',
                            'France',
                            'Lesotho',
                            'Sao Tome and Principe',
                            'Czechia',
                            'Sao Tome and Principe',
                            'Lesotho',
                        ],
                    },
                    {
                        name: 'Aeron',
                        countriesVisited: [
                            'Seychelles',
                            'Dominica',
                            'Brazil',
                            'Trinidad and Tobago',
                            'Palestine, State of',
                            'Tokelau',
                            'Chile',
                            'Christmas Island',
                        ],
                    },
                    {
                        name: 'Tyllor',
                        countriesVisited: [
                            'Malaysia',
                            'Morocco',
                            'Ghana',
                            'Bahrain',
                            'Kyrgyzstan',
                            'Peru',
                            'Equatorial Guinea',
                            'Albania',
                            'Anguilla',
                            'Saint Kitts and Nevis',
                            'Malawi',
                            'Indonesia',
                            'South Africa',
                            'Tonga',
                        ],
                    },
                    {
                        name: 'Russell',
                        countriesVisited: ['Guatemala', 'New Caledonia', 'Aruba', 'Palau', 'Slovakia'],
                    },
                    {
                        name: 'Arnav',
                        countriesVisited: [
                            'Ecuador',
                            'Brunei Darussalam',
                            'Rwanda',
                            'Austria',
                            'Israel',
                            'Somalia',
                            'Algeria',
                            'Tuvalu',
                            'Nauru',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Tyllor',
                countriesVisited: [
                    'Malaysia',
                    'Morocco',
                    'Ghana',
                    'Bahrain',
                    'Kyrgyzstan',
                    'Peru',
                    'Equatorial Guinea',
                    'Albania',
                    'Anguilla',
                    'Saint Kitts and Nevis',
                    'Malawi',
                    'Indonesia',
                    'South Africa',
                    'Tonga',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Conli',
                        countriesVisited: [
                            'Tunisia',
                            'Sierra Leone',
                            'Montenegro',
                            'Guatemala',
                            'Guyana',
                            'Cuba',
                            'Jamaica',
                        ],
                    },
                    {
                        name: 'Mati',
                        countriesVisited: ['Canada', 'India', 'Lithuania', 'Namibia', 'Ecuador'],
                    },
                    {
                        name: 'Kyral',
                        countriesVisited: [
                            'Costa Rica',
                            'Cuba',
                            'Mayotte',
                            'Ukraine',
                            'Ukraine',
                            'Burundi',
                            'Taiwan',
                            'Cyprus',
                            'Norfolk Island',
                            'Zimbabwe',
                            'Lesotho',
                        ],
                    },
                    {
                        name: 'Raheem',
                        countriesVisited: [
                            'Curaçao',
                            'Sierra Leone',
                            'Czechia',
                            'Jersey',
                            'Hong Kong',
                            'Belize',
                            'Greece',
                            'Tajikistan',
                            'France',
                            'Dominica',
                        ],
                    },
                    {
                        name: 'Elias',
                        countriesVisited: [
                            'Myanmar',
                            'Belgium',
                            'Croatia',
                            'Luxembourg',
                            'Saint Vincent and the Grenadines',
                            'Guernsey',
                            'Samoa',
                            'Vanuatu',
                            'Egypt',
                            'Dominica',
                        ],
                    },
                    {
                        name: 'Creag',
                        countriesVisited: [
                            'Bosnia and Herzegovina',
                            'Maldives',
                            'Indonesia',
                            'Kuwait',
                            'Christmas Island',
                        ],
                    },
                    {
                        name: 'Damian',
                        countriesVisited: [
                            'Gabon',
                            'Mexico',
                            'Saint Lucia',
                            'Mayotte',
                            'American Samoa',
                            'Isle of Man',
                            'Yemen',
                            'Burundi',
                            'Switzerland',
                            'Réunion',
                            'Guadeloupe',
                            'Guernsey',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Damian',
                countriesVisited: [
                    'Gabon',
                    'Mexico',
                    'Saint Lucia',
                    'Mayotte',
                    'American Samoa',
                    'Isle of Man',
                    'Yemen',
                    'Burundi',
                    'Switzerland',
                    'Réunion',
                    'Guadeloupe',
                    'Guernsey',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Patrick',
                        countriesVisited: [
                            'Denmark',
                            'Barbados',
                            'Aruba',
                            'Lesotho',
                            'Togo',
                            'South Sudan',
                            'Heard Island and McDonald Islands',
                            'Libya',
                        ],
                    },
                    {
                        name: 'Anay',
                        countriesVisited: ['France', 'Lebanon', 'Libya', "Côte d'Ivoire", 'Taiwan', 'Malta'],
                    },
                    {
                        name: 'Samuel',
                        countriesVisited: [
                            'Guinea',
                            'Fiji',
                            'Uganda',
                            'Belarus',
                            'Kazakhstan',
                            'Burundi',
                            'Cabo Verde',
                            'China',
                            'Ecuador',
                        ],
                    },
                    {
                        name: 'Rhein',
                        countriesVisited: [
                            'India',
                            'Mauritania',
                            'Fiji',
                            'Saint Vincent and the Grenadines',
                            'Mexico',
                            'Mauritius',
                        ],
                    },
                    {
                        name: 'Tyllor',
                        countriesVisited: [
                            'India',
                            'Jamaica',
                            'Curaçao',
                            'Bhutan',
                            'South Georgia and the South Sandwich Islands',
                            'Guinea',
                            'Saint Barthélemy',
                            'Gabon',
                            'Azerbaijan',
                            'Serbia',
                        ],
                    },
                    {
                        name: 'Maaz',
                        countriesVisited: ['Georgia', 'Morocco', 'Colombia', 'Singapore', 'Eswatini'],
                    },
                ],
            ],
            expected: {
                name: 'Tyllor',
                countriesVisited: [
                    'India',
                    'Jamaica',
                    'Curaçao',
                    'Bhutan',
                    'South Georgia and the South Sandwich Islands',
                    'Guinea',
                    'Saint Barthélemy',
                    'Gabon',
                    'Azerbaijan',
                    'Serbia',
                ],
            },
        },
        {
            input: [
                [
                    {
                        name: 'Ricards',
                        countriesVisited: [
                            'Mexico',
                            'Gibraltar',
                            'Liechtenstein',
                            'Wallis and Futuna',
                            'Bonaire, Sint Eustatius and Saba',
                            'Nauru',
                        ],
                    },
                    {
                        name: 'Robbi',
                        countriesVisited: [
                            "Côte d'Ivoire",
                            'Tonga',
                            'Heard Island and McDonald Islands',
                            'Monaco',
                            'Cyprus',
                            'Bonaire, Sint Eustatius and Saba',
                            'Albania',
                        ],
                    },
                    {
                        name: 'Markus',
                        countriesVisited: [
                            'Antarctica',
                            'Solomon Islands',
                            'Western Sahara',
                            'Ghana',
                            'Liberia',
                            'India',
                            'Oman',
                            'Tajikistan',
                        ],
                    },
                    {
                        name: 'Karamvir',
                        countriesVisited: [
                            'Macao',
                            'Palestine, State of',
                            'Mozambique',
                            'Lebanon',
                            'Argentina',
                            'Saint Vincent and the Grenadines',
                            'Nepal',
                            'Hungary',
                            'Iceland',
                            'Saint Pierre and Miquelon',
                            'Bahrain',
                            'Canada',
                            'Antarctica',
                        ],
                    },
                    {
                        name: 'Ehsan',
                        countriesVisited: [
                            'Indonesia',
                            'Antarctica',
                            'Iraq',
                            'Peru',
                            'Vanuatu',
                            'Grenada',
                            'Luxembourg',
                            'Lebanon',
                            'New Zealand',
                            'China',
                            'Jersey',
                        ],
                    },
                ],
            ],
            expected: {
                name: 'Karamvir',
                countriesVisited: [
                    'Macao',
                    'Palestine, State of',
                    'Mozambique',
                    'Lebanon',
                    'Argentina',
                    'Saint Vincent and the Grenadines',
                    'Nepal',
                    'Hungary',
                    'Iceland',
                    'Saint Pierre and Miquelon',
                    'Bahrain',
                    'Canada',
                    'Antarctica',
                ],
            },
        },
    ],
    options: {
        type: 'JSON',
    },
};
