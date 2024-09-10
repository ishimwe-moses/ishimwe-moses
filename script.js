function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

const continentsData = {
    'Africa': {
        countries: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Príncipe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'],
        cities: ['Algiers', 'Luanda', 'Porto-Novo', 'Gaborone', 'Ouagadougou', 'Gitega', 'Praia', 'Yaoundé', 'Bangui', 'N\'Djamena', 'Moroni', 'Kinshasa', 'Brazzaville', 'Djibouti', 'Cairo', 'Malabo', 'Asmara', 'Mbabane', 'Addis Ababa', 'Libreville', 'Banjul', 'Accra', 'Conakry', 'Bissau', 'Yamoussoukro', 'Nairobi', 'Maseru', 'Monrovia', 'Tripoli', 'Antananarivo', 'Lilongwe', 'Bamako', 'Nouakchott', 'Port Louis', 'Rabat', 'Maputo', 'Windhoek', 'Niamey', 'Abuja', 'Kigali', 'São Tomé', 'Dakar', 'Victoria', 'Freetown', 'Mogadishu', 'Pretoria', 'Juba', 'Khartoum', 'Dodoma', 'Lomé', 'Tunis', 'Kampala', 'Lusaka', 'Harare'],
        countryToCity: {
            'Algeria': 'Algiers',
            'Angola': 'Luanda',
            'Benin': 'Porto-Novo',
            'Botswana': 'Gaborone',
            'Burkina Faso': 'Ouagadougou',
            'Burundi': 'Gitega',
            'Cabo Verde': 'Praia',
            'Cameroon': 'Yaoundé',
            'Central African Republic': 'Bangui',
            'Chad': 'N\'Djamena',
            'Comoros': 'Moroni',
            'Democratic Republic of the Congo': 'Kinshasa',
            'Republic of the Congo': 'Brazzaville',
            'Djibouti': 'Djibouti',
            'Egypt': 'Cairo',
            'Equatorial Guinea': 'Malabo',
            'Eritrea': 'Asmara',
            'Eswatini': 'Mbabane',
            'Ethiopia': 'Addis Ababa',
            'Gabon': 'Libreville',
            'Gambia': 'Banjul',
            'Ghana': 'Accra',
            'Guinea': 'Conakry',
            'Guinea-Bissau': 'Bissau',
            'Ivory Coast': 'Yamoussoukro',
            'Kenya': 'Nairobi',
            'Lesotho': 'Maseru',
            'Liberia': 'Monrovia',
            'Libya': 'Tripoli',
            'Madagascar': 'Antananarivo',
            'Malawi': 'Lilongwe',
            'Mali': 'Bamako',
            'Mauritania': 'Nouakchott',
            'Mauritius': 'Port Louis',
            'Morocco': 'Rabat',
            'Mozambique': 'Maputo',
            'Namibia': 'Windhoek',
            'Niger': 'Niamey',
            'Nigeria': 'Abuja',
            'Rwanda': 'Kigali',
            'São Tomé and Príncipe': 'São Tomé',
            'Senegal': 'Dakar',
            'Seychelles': 'Victoria',
            'Sierra Leone': 'Freetown',
            'Somalia': 'Mogadishu',
            'South Africa': 'Pretoria',
            'South Sudan': 'Juba',
            'Sudan': 'Khartoum',
            'Tanzania': 'Dodoma',
            'Togo': 'Lomé',
            'Tunisia': 'Tunis',
            'Uganda': 'Kampala',
            'Zambia': 'Lusaka',
            'Zimbabwe': 'Harare'
        },
        cityToCountry: {
            'Algiers': 'Algeria',
            'Luanda': 'Angola',
            'Porto-Novo': 'Benin',
            'Gaborone': 'Botswana',
            'Ouagadougou': 'Burkina Faso',
            'Gitega': 'Burundi',
            'Praia': 'Cabo Verde',
            'Yaoundé': 'Cameroon',
            'Bangui': 'Central African Republic',
            'N\'Djamena': 'Chad',
            'Moroni': 'Comoros',
            'Kinshasa': 'Democratic Republic of the Congo',
            'Brazzaville': 'Republic of the Congo',
            'Djibouti': 'Djibouti',
            'Cairo': 'Egypt',
            'Malabo': 'Equatorial Guinea',
            'Asmara': 'Eritrea',
            'Mbabane': 'Eswatini',
            'Addis Ababa': 'Ethiopia',
            'Libreville': 'Gabon',
            'Banjul': 'Gambia',
            'Accra': 'Ghana',
            'Conakry': 'Guinea',
            'Bissau': 'Guinea-Bissau',
            'Yamoussoukro': 'Ivory Coast',
            'Nairobi': 'Kenya',
            'Maseru': 'Lesotho',
            'Monrovia': 'Liberia',
            'Tripoli': 'Libya',
            'Antananarivo': 'Madagascar',
            'Lilongwe': 'Malawi',
            'Bamako': 'Mali',
            'Nouakchott': 'Mauritania',
            'Port Louis': 'Mauritius',
            'Rabat': 'Morocco',
            'Maputo': 'Mozambique',
            'Windhoek': 'Namibia',
            'Niamey': 'Niger',
            'Abuja': 'Nigeria',
            'Kigali': 'Rwanda',
            'São Tomé': 'São Tomé and Príncipe',
            'Dakar': 'Senegal',
            'Victoria': 'Seychelles',
            'Freetown': 'Sierra Leone',
            'Mogadishu': 'Somalia',
            'Pretoria': 'South Africa',
            'Juba': 'South Sudan',
            'Khartoum': 'Sudan',
            'Dodoma': 'Tanzania',
            'Lomé': 'Togo',
            'Tunis': 'Tunisia',
            'Kampala': 'Uganda',
            'Lusaka': 'Zambia',
            'Harare': 'Zimbabwe'
        }
    },
    'North America': {
            countries: ['Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Canada', 'Costa Rica', 'Cuba', 'Dominica', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Trinidad and Tobago', 'United States'],
            cities: ['Saint John\'s', 'Nassau', 'Bridgetown', 'Belmopan', 'Ottawa', 'San José', 'Havana', 'Roseau', 'Santo Domingo', 'San Salvador', 'Saint George\'s', 'Guatemala City', 'Port-au-Prince', 'Tegucigalpa', 'Kingston', 'Mexico City', 'Managua', 'Panama City', 'Basseterre', 'Castries', 'Kingstown', 'Port of Spain', 'Washington, D.C.'],
        countryToCity: {
                'Antigua and Barbuda': 'Saint John\'s',
                'Bahamas': 'Nassau',
                'Barbados': 'Bridgetown',
                'Belize': 'Belmopan',
                'Canada': 'Ottawa',
                'Costa Rica': 'San José',
                'Cuba': 'Havana',
                'Dominica': 'Roseau',
                'Dominican Republic': 'Santo Domingo',
                'El Salvador': 'San Salvador',
                'Grenada': 'Saint George\'s',
                'Guatemala': 'Guatemala City',
                'Haiti': 'Port-au-Prince',
                'Honduras': 'Tegucigalpa',
                'Jamaica': 'Kingston',
                'Mexico': 'Mexico City',
                'Nicaragua': 'Managua',
                'Panama': 'Panama City',
                'Saint Kitts and Nevis': 'Basseterre',
                'Saint Lucia': 'Castries',
                'Saint Vincent and the Grenadines': 'Kingstown',
                'Trinidad and Tobago': 'Port of Spain',
                'United States': 'Washington, D.C.'
            },
            cityToCountry: {
                'Saint John\'s': 'Antigua and Barbuda',
                'Nassau': 'Bahamas',
                'Bridgetown': 'Barbados',
                'Belmopan': 'Belize',
                'Ottawa': 'Canada',
                'San José': 'Costa Rica',
                'Havana': 'Cuba',
                'Roseau': 'Dominica',
                'Santo Domingo': 'Dominican Republic',
                'San Salvador': 'El Salvador',
                'Saint George\'s': 'Grenada',
                'Guatemala City': 'Guatemala',
                'Port-au-Prince': 'Haiti',
                'Tegucigalpa': 'Honduras',
                'Kingston': 'Jamaica',
                'Mexico City': 'Mexico',
                'Managua': 'Nicaragua',
                'Panama City': 'Panama',
                'Basseterre': 'Saint Kitts and Nevis',
                'Castries': 'Saint Lucia',
                'Kingstown': 'Saint Vincent and the Grenadines',
                'Port of Spain': 'Trinidad and Tobago',
                'Washington, D.C.': 'United States'
            }
    },
        'South America': {
            countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'],
            cities: ['Buenos Aires', 'Sucre', 'Brasília', 'Santiago', 'Bogotá', 'Quito', 'Georgetown', 'Asunción', 'Lima', 'Paramaribo', 'Montevideo', 'Caracas'],
            countryToCity: {
                'Argentina': 'Buenos Aires',
                'Bolivia': 'Sucre',
                'Brazil': 'Brasília',
                'Chile': 'Santiago',
                'Colombia': 'Bogotá',
                'Ecuador': 'Quito',
                'Guyana': 'Georgetown',
                'Paraguay': 'Asunción',
                'Peru': 'Lima',
                'Suriname': 'Paramaribo',
                'Uruguay': 'Montevideo',
                'Venezuela': 'Caracas'
            },
            cityToCountry: {
                'Buenos Aires': 'Argentina',
                'Sucre': 'Bolivia',
                'Brasília': 'Brazil',
                'Santiago': 'Chile',
                'Bogotá': 'Colombia',
                'Quito': 'Ecuador',
                'Georgetown': 'Guyana',
                'Asunción': 'Paraguay',
                'Lima': 'Peru',
                'Paramaribo': 'Suriname',
                'Montevideo': 'Uruguay',
                'Caracas': 'Venezuela'
            }
        },
        'Oceania': {
            countries: ['Australia', 'Fiji', 'Kiribati', 'Marshall Islands', 'Micronesia', 'Nauru', 'New Zealand', 'Palau', 'Papua New Guinea', 'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu'],
            cities: ['Canberra', 'Suva', 'Tarawa', 'Majuro', 'Palikir', 'Yaren', 'Wellington', 'Ngerulmud', 'Port Moresby', 'Apia', 'Honiara', 'Nuku\'alofa', 'Funafuti', 'Port Vila'],
            countryToCity: {
                'Australia': 'Canberra',
                'Fiji': 'Suva',
                'Kiribati': 'Tarawa',
                'Marshall Islands': 'Majuro',
                'Micronesia': 'Palikir',
                'Nauru': 'Yaren',
                'New Zealand': 'Wellington',
                'Palau': 'Ngerulmud',
                'Papua New Guinea': 'Port Moresby',
                'Samoa': 'Apia',
                'Solomon Islands': 'Honiara',
                'Tonga': 'Nuku\'alofa',
                'Tuvalu': 'Funafuti',
                'Vanuatu': 'Port Vila'
            },
            cityToCountry: {
                'Canberra': 'Australia',
                'Suva': 'Fiji',
                'Tarawa': 'Kiribati',
                'Majuro': 'Marshall Islands',
                'Palikir': 'Micronesia',
                'Yaren': 'Nauru',
                'Wellington': 'New Zealand',
                'Ngerulmud': 'Palau',
                'Port Moresby': 'Papua New Guinea',
                'Apia': 'Samoa',
                'Honiara': 'Solomon Islands',
                'Nuku\'alofa': 'Tonga',
                'Funafuti': 'Tuvalu',
                'Port Vila': 'Vanuatu'
            }
        
    },

    'Asia': {
        countries: ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'],
        cities: ['Kabul', 'Yerevan', 'Baku', 'Manama', 'Dhaka', 'Thimphu', 'Bandar Seri Begawan', 'Phnom Penh', 'Beijing', 'Nicosia', 'Tbilisi', 'New Delhi', 'Jakarta', 'Tehran', 'Baghdad', 'Jerusalem', 'Tokyo', 'Amman', 'Nur-Sultan', 'Kuwait City', 'Bishkek', 'Vientiane', 'Beirut', 'Kuala Lumpur', 'Malé', 'Ulaanbaatar', 'Naypyidaw', 'Kathmandu', 'Pyongyang', 'Muscat', 'Islamabad', 'Ramallah', 'Manila', 'Doha', 'Riyadh', 'Singapore', 'Seoul', 'Colombo', 'Damascus', 'Dushanbe', 'Bangkok', 'Dili', 'Ankara', 'Ashgabat', 'Abu Dhabi', 'Tashkent', 'Hanoi', 'Sana\'a'],
        countryToCity: {
            'Afghanistan': 'Kabul',
            'Armenia': 'Yerevan',
            'Azerbaijan': 'Baku',
            'Bahrain': 'Manama',
            'Bangladesh': 'Dhaka',
            'Bhutan': 'Thimphu',
            'Brunei': 'Bandar Seri Begawan',
            'Cambodia': 'Phnom Penh',
            'China': 'Beijing',
            'Cyprus': 'Nicosia',
            'Georgia': 'Tbilisi',
            'India': 'New Delhi',
            'Indonesia': 'Jakarta',
            'Iran': 'Tehran',
            'Iraq': 'Baghdad',
            'Israel': 'Jerusalem',
            'Japan': 'Tokyo',
            'Jordan': 'Amman',
            'Kazakhstan': 'Nur-Sultan',
            'Kuwait': 'Kuwait City',
            'Kyrgyzstan': 'Bishkek',
            'Laos': 'Vientiane',
            'Lebanon': 'Beirut',
            'Malaysia': 'Kuala Lumpur',
            'Maldives': 'Malé',
            'Mongolia': 'Ulaanbaatar',
            'Myanmar': 'Naypyidaw',
            'Nepal': 'Kathmandu',
            'North Korea': 'Pyongyang',
            'Oman': 'Muscat',
            'Pakistan': 'Islamabad',
            'Palestine': 'Ramallah',
            'Philippines': 'Manila',
            'Qatar': 'Doha',
            'Saudi Arabia': 'Riyadh',
            'Singapore': 'Singapore',
            'South Korea': 'Seoul',
            'Sri Lanka': 'Colombo',
            'Syria': 'Damascus',
            'Tajikistan': 'Dushanbe',
            'Thailand': 'Bangkok',
            'Timor-Leste': 'Dili',
            'Turkey': 'Ankara',
            'Turkmenistan': 'Ashgabat',
            'United Arab Emirates': 'Abu Dhabi',
            'Uzbekistan': 'Tashkent',
            'Vietnam': 'Hanoi',
            'Yemen': 'Sana\'a'
        },
        cityToCountry: {
            'Kabul': 'Afghanistan',
            'Yerevan': 'Armenia',
            'Baku': 'Azerbaijan',
            'Manama': 'Bahrain',
            'Dhaka': 'Bangladesh',
            'Thimphu': 'Bhutan',
            'Bandar Seri Begawan': 'Brunei',
            'Phnom Penh': 'Cambodia',
            'Beijing': 'China',
            'Nicosia': 'Cyprus',
            'Tbilisi': 'Georgia',
            'New Delhi': 'India',
            'Jakarta': 'Indonesia',
            'Tehran': 'Iran',
            'Baghdad': 'Iraq',
            'Jerusalem': 'Israel',
            'Tokyo': 'Japan',
            'Amman': 'Jordan',
            'Nur-Sultan': 'Kazakhstan',
            'Kuwait City': 'Kuwait',
            'Bishkek': 'Kyrgyzstan',
            'Vientiane': 'Laos',
            'Beirut': 'Lebanon',
            'Kuala Lumpur': 'Malaysia',
            'Malé': 'Maldives',
            'Ulaanbaatar': 'Mongolia',
            'Naypyidaw': 'Myanmar',
            'Kathmandu': 'Nepal',
            'Pyongyang': 'North Korea',
            'Muscat': 'Oman',
            'Islamabad': 'Pakistan',
            'Ramallah': 'Palestine',
            'Manila': 'Philippines',
            'Doha': 'Qatar',
            'Riyadh': 'Saudi Arabia',
            'Singapore': 'Singapore',
            'Seoul': 'South Korea',
            'Colombo': 'Sri Lanka',
            'Damascus': 'Syria',
            'Dushanbe': 'Tajikistan',
            'Bangkok': 'Thailand',
            'Dili': 'Timor-Leste',
            'Ankara': 'Turkey',
            'Ashgabat': 'Turkmenistan',
            'Abu Dhabi': 'United Arab Emirates',
            'Tashkent': 'Uzbekistan',
            'Hanoi': 'Vietnam',
            'Sana\'a': 'Yemen'
        }
    },
    'Antarctica': {
    countries: [
        'United States', 
        'United States', 
        'United States', 
        'United Kingdom', 
        'United Kingdom', 
        'Germany', 
        'India', 
        'Norway', 
        'France & Italy', 
        'Australia', 
        'Australia', 
        'Australia', 
        'Russia', 
        'China', 
        'Chile'
    ],
    cities: [
        'McMurdo Station', 
        'Amundsen-Scott South Pole Station', 
        'Palmer Station', 
        'Rothera Research Station', 
        'Halley Research Station', 
        'Neumayer-Station III', 
        'Maitri', 
        'Troll', 
        'Concordia Station', 
        'Davis Station', 
        'Mawson Station', 
        'Casey Station', 
        'Vostok Station', 
        'Great Wall Station', 
        'Escudero Station'
    ],
    countryToCity: {
        'United States': ['McMurdo Station', 'Amundsen-Scott South Pole Station', 'Palmer Station'],
        'United States':'Amundsen-Scott South Pole Station',
        'United States':'Palmer Station',
        'United Kingdom': ['Rothera Research Station', 'Halley Research Station'],
        'Germany': 'Neumayer-Station III',
        'India': 'Maitri',
        'Norway': 'Troll',
        'France & Italy': 'Concordia Station',
        'Australia': ['Davis Station', 'Mawson Station', 'Casey Station'],
        'Russia': 'Vostok Station',
        'China': 'Great Wall Station',
        'Chile': 'Escudero Station'
    },
    cityToCountry: {
        'McMurdo Station': 'United States',
        'Amundsen-Scott South Pole Station': 'United States',
        'Palmer Station': 'United States',
        'Rothera Research Station': 'United Kingdom',
        'Halley Research Station': 'United Kingdom',
        'Neumayer-Station III': 'Germany',
        'Maitri': 'India',
        'Troll': 'Norway',
        'Concordia Station': 'France & Italy',
        'Davis Station': 'Australia',
        'Mawson Station': 'Australia',
        'Casey Station': 'Australia',
        'Vostok Station': 'Russia',
        'Great Wall Station': 'China',
        'Escudero Station': 'Chile'
    }
},


    'Europe': {
        countries: ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kazakhstan', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'],
        cities: ['Tirana', 'Andorra la Vella', 'Yerevan', 'Vienna', 'Baku', 'Minsk', 'Brussels', 'Sarajevo', 'Sofia', 'Zagreb', 'Nicosia', 'Prague', 'Copenhagen', 'Tallinn', 'Helsinki', 'Paris', 'Tbilisi', 'Berlin', 'Athens', 'Budapest', 'Reykjavik', 'Dublin', 'Rome', 'Nur-Sultan', 'Pristina', 'Riga', 'Vaduz', 'Vilnius', 'Luxembourg', 'Valletta', 'Chișinău', 'Monaco', 'Podgorica', 'Amsterdam', 'Skopje', 'Oslo', 'Warsaw', 'Lisbon', 'Bucharest', 'Moscow', 'San Marino', 'Belgrade', 'Bratislava', 'Ljubljana', 'Madrid', 'Stockholm', 'Bern', 'Ankara', 'Kyiv', 'London', 'Vatican City'],
        countryToCity: {
            'Albania': 'Tirana',
            'Andorra': 'Andorra la Vella',
            'Armenia': 'Yerevan',
            'Austria': 'Vienna',
            'Azerbaijan': 'Baku',
            'Belarus': 'Minsk',
            'Belgium': 'Brussels',
            'Bosnia and Herzegovina': 'Sarajevo',
            'Bulgaria': 'Sofia',
            'Croatia': 'Zagreb',
            'Cyprus': 'Nicosia',
            'Czech Republic': 'Prague',
            'Denmark': 'Copenhagen',
            'Estonia': 'Tallinn',
            'Finland': 'Helsinki',
            'France': 'Paris',
            'Georgia': 'Tbilisi',
            'Germany': 'Berlin',
            'Greece': 'Athens',
            'Hungary': 'Budapest',
            'Iceland': 'Reykjavik',
            'Ireland': 'Dublin',
            'Italy': 'Rome',
            'Kazakhstan': 'Nur-Sultan',
            'Kosovo': 'Pristina',
            'Latvia': 'Riga',
            'Liechtenstein': 'Vaduz',
            'Lithuania': 'Vilnius',
            'Luxembourg': 'Luxembourg',
            'Malta': 'Valletta',
            'Moldova': 'Chișinău',
            'Monaco': 'Monaco',
            'Montenegro': 'Podgorica',
            'Netherlands': 'Amsterdam',
            'North Macedonia': 'Skopje',
            'Norway': 'Oslo',
            'Poland': 'Warsaw',
            'Portugal': 'Lisbon',
            'Romania': 'Bucharest',
            'Russia': 'Moscow',
            'San Marino': 'San Marino',
            'Serbia': 'Belgrade',
            'Slovakia': 'Bratislava',
            'Slovenia': 'Ljubljana',
            'Spain': 'Madrid',
            'Sweden': 'Stockholm',
            'Switzerland': 'Bern',
            'Turkey': 'Ankara',
            'Ukraine': 'Kyiv',
            'United Kingdom': 'London',
            'Vatican City': 'Vatican City'
        },
        cityToCountry: {
            'Tirana': 'Albania',
            'Andorra la Vella': 'Andorra',
            'Yerevan': 'Armenia',
            'Vienna': 'Austria',
            'Baku': 'Azerbaijan',
            'Minsk': 'Belarus',
            'Brussels': 'Belgium',
            'Sarajevo': 'Bosnia and Herzegovina',
            'Sofia': 'Bulgaria',
            'Zagreb': 'Croatia',
            'Nicosia': 'Cyprus',
            'Prague': 'Czech Republic',
            'Copenhagen': 'Denmark',
            'Tallinn': 'Estonia',
            'Helsinki': 'Finland',
            'Paris': 'France',
            'Tbilisi': 'Georgia',
            'Berlin': 'Germany',
            'Athens': 'Greece',
            'Budapest': 'Hungary',
            'Reykjavik': 'Iceland',
            'Dublin': 'Ireland',
            'Rome': 'Italy',
            'Nur-Sultan': 'Kazakhstan',
            'Pristina': 'Kosovo',
            'Riga': 'Latvia',
            'Vaduz': 'Liechtenstein',
            'Vilnius': 'Lithuania',
            'Luxembourg': 'Luxembourg',
            'Valletta': 'Malta',
            'Chișinău': 'Moldova',
            'Monaco': 'Monaco',
            'Podgorica': 'Montenegro',
            'Amsterdam': 'Netherlands',
            'Skopje': 'North Macedonia',
            'Oslo': 'Norway',
            'Warsaw': 'Poland',
            'Lisbon': 'Portugal',
            'Bucharest': 'Romania',
            'Moscow': 'Russia',
            'San Marino': 'San Marino',
            'Belgrade': 'Serbia',
            'Bratislava': 'Slovakia',
            'Ljubljana': 'Slovenia',
            'Madrid': 'Spain',
            'Stockholm': 'Sweden',
            'Bern': 'Switzerland',
            'Ankara': 'Turkey',
            'Kyiv': 'Ukraine',
            'London': 'United Kingdom',
            'Vatican City': 'Vatican City'
        }
},
}
let selectedContinent = '';
let selectedField = '';
let correctAnswers = 0;
let questions = [];

function chooseContinent(continent) {
    selectedContinent = continent;
    document.getElementById('chosen-continent').innerText = continent;
    document.getElementById('continents').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function startQuiz(field) {
    selectedField = field;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    generateQuestions();
    const instruction = selectedField === 'country' ? 
        'Welcome!look the given names if are countries enter their cities,and vice versa again also check wherther are stations enter the countries that owns those stations.' :
        'Welcome!look the given names if are countries enter their cities,and vice versa again also check wherther are stations enter the countries that owns those stations.';
    document.getElementById('instruction').innerText = instruction;
}

function generateQuestions() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    const data = continentsData[selectedContinent];
    const items = selectedField === 'country' ? data.cities : data.countries;
    questions = items.sort(() => 0.5 - Math.random()).slice(0, 10);
    questions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <label>${item}: </label>
            <input type="text" id="answer-${index}">
        `;
        questionList.appendChild(questionDiv);
    });
}

function submitAnswers() {
    const data = continentsData[selectedContinent];
    const correctMap = selectedField === 'country' ? data.cityToCountry : data.countryToCity;

    correctAnswers = 0;
    const correctAnswersList = [];
    questions.forEach((question, i) => {
        const userAnswer = document.getElementById(`answer-${i}`).value.trim();
        if (userAnswer === correctMap[question]) {
            correctAnswers++;
        } else {
            correctAnswersList.push(`${question}: ${correctMap[question]}`);
        }
    });
    document.getElementById('questions').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('result-message').innerText = `You got ${correctAnswers} out of 10 correct!`;
    const correctAnswersDiv = document.getElementById('correct-answers');
    correctAnswersDiv.innerHTML = correctAnswersList.length > 0 ? 
        `<h4>Correct answers:</h4><p>${correctAnswersList.join('<br>')}</p>` : 
        '<p>congulatration All your answers were correct!</p>';
}

function continueQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}
