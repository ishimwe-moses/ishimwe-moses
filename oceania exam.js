const questions = [
    { question: "Which region of Oceania includes Australia and New Zealand?", type: "checkbox", options: ["Australasia", "Melanesia", "Micronesia", "Polynesia"], answer: "Australasia" },
    { question: "What is the capital city of Australia?", type: "checkbox", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Which city is known for the Sydney Opera House?", type: "checkbox", options: ["Sydney", "Auckland", "Suva", "Port Moresby"], answer: "Sydney" },
    { question: "What is the capital city of Fiji?", type: "checkbox", options: ["Suva", "Honiara", "Port Vila", "Ngerulmud"], answer: "Suva" },
    { question: "Which country is famous for its crystal-clear waters and coral reefs?", type: "checkbox", options: ["Fiji", "New Zealand", "Australia", "Papua New Guinea"], answer: "Fiji" },
    { question: "Which city is the largest in New Zealand?", type: "checkbox", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: "Auckland" },
    { question: "Which country has the Great Barrier Reef?", type: "checkbox", options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], answer: "Australia" },
    { question: "What is the capital city of New Zealand?", type: "checkbox", options: ["Wellington", "Auckland", "Christchurch", "Dunedin"], answer: "Wellington" },
    { question: "Which island nation is known for having over 330 islands?", type:"checkbox", options: ["Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu"], answer: "Fiji" },
    { question: "Which country in Oceania is known for its ancient cultural traditions and active volcanoes?", type: "checkbox", options: ["Vanuatu", "Solomon Islands", "Papua New Guinea", "Fiji"], answer: "Vanuatu" },
    { question: "Which of the following is NOT a part of Micronesia?", type: "checkbox", options: ["Palau", "Majuro", "Port Moresby", "Tarawa"], answer: "Port Moresby" },
    { question: "What is the most populous city in Australia?", type: "checkbox", options: ["Sydney", "Melbourne", "Brisbane", "Perth"], answer: "Sydney" },
    { question: "Which Australian city is famous for its Harbour Bridge?", type: "checkbox", options: ["Sydney", "Melbourne", "Adelaide", "Canberra"], answer: "Sydney" },
    { question: "Which country is known for its lush landscapes and high rate of linguistic diversity?", type: "checkbox", options: ["Papua New Guinea", "Fiji", "New Zealand", "Australia"], answer: "Papua New Guinea" },
    { question: "Which of the following countries is located in Polynesia?", type: "checkbox", options: ["Samoa", "Fiji", "New Caledonia", "Solomon Islands"], answer: "Samoa" },
    { question: "Which country has the Rock Islands, a UNESCO World Heritage site?", type: "checkbox", options: ["Palau", "Marshall Islands", "Kiribati", "Guam"], answer: "Palau" },
    { question: "What is the primary language spoken in Australia?", type: "checkbox", options: ["English", "French", "Spanish", "Mandarin"], answer: "English" },
    { question: "Which of the following cities is a major cultural hub in New Zealand?", type:"checkbox", options: ["Auckland", "Wellington", "Christchurch", "Dunedin"], answer: "Wellington" },
    { question: "Which country is known for the traditional land diving ceremonies?", type: "checkbox", options: ["Vanuatu", "New Caledonia", "Papua New Guinea", "Fiji"], answer: "Vanuatu" },
    { question: "Which of the following is NOT an island nation in Micronesia?", type: "checkbox", options: ["Nauru", "Palau", "Marshall Islands", "Kiribati"], answer: "Nauru" },
    { question: "Which city is the capital of the Solomon Islands?", type:"checkbox", options: ["Honiara", "Port Moresby", "Suva", "Ngerulmud"], answer: "Honiara" },
    { question: "Which country is known for its stunning lagoon, one of the largest in the world?", type:"checkbox", options: ["New Caledonia", "Guam", "Samoa", "Tonga"], answer: "New Caledonia" },
    { question: "What is the de facto capital of Nauru?", type:"checkbox", options: ["Yaren", "Hagåtña", "Tarawa", "Palikir"], answer: "Yaren" },
    { question: "Which of the following is the capital city of the Federated States of Micronesia?", type: "checkbox", options: ["Palikir", "Majuro", "Tarawa", "Hagåtña"], answer: "Palikir" },
    { question: "Which Australian city is known for its Federation Square?", type: "checkbox", options: ["Melbourne", "Sydney", "Brisbane", "Perth"], answer: "Melbourne" },
    { question: "Which island group is known for its beautiful beaches and unique marine life?", type: "checkbox", options: ["Micronesia", "Melanesia", "Polynesia", "Australasia"], answer: "Micronesia" },
    { question: "Which city is the capital of West Papua?", type: "checkbox", options: ["Manokwari", "Honiara", "Suva", "Nouméa"], answer: "Manokwari" },
    { question: "Which of the following is known for its ancient city of Nan Madol?", type: "checkbox", options: ["Micronesia", "Melanesia", "Polynesia", "Australasia"], answer: "Micronesia" },
    { question: "Which country's landscape features stunning fjords and mountains?", type: "checkbox", options: ["New Zealand", "Australia", "Fiji", "Papua New Guinea"], answer: "New Zealand" },
    { question: "Which of the following countries is known for its soft coral reefs?", type: "checkbox", options: ["Fiji", "Palau", "Nauru", "Kiribati"], answer: "Fiji" },
    { question: "What is the main language spoken in New Zealand?", type: "checkbox", options: ["English", "Maori", "French", "Spanish"], answer: "English" },
    { question: "Which of the following cities is a major cultural and economic center in Papua New Guinea?", type:"checkbox", options: ["Port Moresby", "Honiara", "Suva", "Tarawa"], answer: "Port Moresby" },
    { question: "Which country has the world's largest coral reef system?", type: "checkbox", options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], answer: "Australia" },
        { question: "Which of the following countries are part of Australasia? (Select all that apply)", type: "checkbox", options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], answer: ["Australia", "New Zealand"] },
        { question: "Which cities are located in Melanesia? (Select all that apply)", type: "checkbox", options: ["Suva", "Honiara", "Port Moresby", "Ngerulmud"], answer: ["Suva", "Port Moresby", "Honiara"] },
        { question: "Which of the following islands are part of Micronesia? (Select all that apply)", type: "checkbox", options: ["Palikir", "Tarawa", "Majuro", "Port Vila"], answer: ["Palikir", "Tarawa", "Majuro"] },
        { question: "Which countries are known for their unique marine life and coral reefs? (Select all that apply)", type: "checkbox", options: ["Fiji", "New Caledonia", "Guam", "Papua New Guinea"], answer: ["Fiji", "New Caledonia"] },
        { question: "Which cities are major cultural hubs in Australasia? (Select all that apply)", type: "checkbox", options: ["Sydney", "Wellington", "Suva", "Port Moresby"], answer: ["Sydney", "Wellington"] },
        { question: "Which countries in Oceania are known for having multiple islands? (Select all that apply)", type: "checkbox", options: ["Fiji", "Solomon Islands", "Nauru", "Vanuatu"], answer: ["Fiji", "Solomon Islands", "Vanuatu"] },
        { question: "Which of the following are capitals of Micronesian countries? (Select all that apply)", type: "checkbox", options: ["Palikir", "Hagåtña", "Majuro", "Suva"], answer: ["Palikir", "Hagåtña", "Majuro"] },
        { question: "Which of the following are famous natural features in Australasia? (Select all that apply)", type: "checkbox", options: ["Great Barrier Reef", "Fiordland National Park", "Rock Islands", "Uluru"], answer: ["Great Barrier Reef", "Fiordland National Park", "Uluru"] },
        { question: "Which islands are part of Polynesia? (Select all that apply)", type: "checkbox", options: ["Samoa", "Tonga", "Guam", "Hawaii"], answer: ["Samoa", "Tonga", "Hawaii"] },
        { question: "Which of the following countries have active volcanoes? (Select all that apply)", type: "checkbox", options: ["Vanuatu", "Fiji", "Papua New Guinea", "New Zealand"], answer: ["Vanuatu", "Papua New Guinea", "New Zealand"] },
        { question: "Which countries are known for their traditional cultural festivals? (Select all that apply)", type: "checkbox", options: ["Australia", "New Zealand", "Fiji", "Palau"], answer: ["Australia", "New Zealand", "Fiji"] },
        { question: "Which cities are known for their beautiful natural landscapes? (Select all that apply)", type: "checkbox", options: ["Auckland", "Sydney", "Honiara", "Ngerulmud"], answer: ["Auckland", "Sydney"] },
        { question: "Which countries have stunning beaches and marine life? (Select all that apply)", type: "checkbox", options: ["Fiji", "Palau", "New Zealand", "Guam"], answer: ["Fiji", "Palau", "Guam"] },
        { question: "Which of the following cities are located in Micronesia? (Select all that apply)", type: "checkbox", options: ["Saipan", "Majuro", "Tarawa", "Port Vila"], answer: ["Saipan", "Majuro", "Tarawa"] },
        { question: "Which countries have significant linguistic diversity? (Select all that apply)", type: "checkbox", options: ["Papua New Guinea", "Fiji", "New Zealand", "Australia"], answer: ["Papua New Guinea"] },
        { question: "Which of these locations are known for their vibrant underwater ecosystems? (Select all that apply)", type: "checkbox", options: ["Great Barrier Reef", "Chuuk Lagoon", "Rock Islands", "Lagoon in New Caledonia"], answer: ["Great Barrier Reef", "Chuuk Lagoon", "Lagoon in New Caledonia"] },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-australia.jpeg' alt='Flag of Australia'>",
            type: "multiple",
            options: ["Australia", "New Zealand", "Fiji"],
            answer: "Australia"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-new-zealand.jpeg' alt='Flag of New Zealand'>",
            type: "multiple",
            options: ["New Zealand", "Australia", "Papua New Guinea"],
            answer: "New Zealand"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-fiji.jpeg' alt='Flag of Fiji'>",
            type: "multiple",
            options: ["Fiji", "Samoa", "Vanuatu"],
            answer: "Fiji"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-papua-new-guinea.jpeg' alt='Flag of Papua New Guinea'>",
            type: "multiple",
            options: ["Papua New Guinea", "Palau", "Tonga"],
            answer: "Papua New Guinea"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-samoa.jpeg' alt='Flag of Samoa'>",
            type: "multiple",
            options: ["Samoa", "Tonga", "Vanuatu"],
            answer: "Samoa"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-tonga.jpeg' alt='Flag of Tonga'>",
            type: "multiple",
            options: ["Tonga", "Samoa", "Palau"],
            answer: "Tonga"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-palau.jpeg' alt='Flag of Palau'>",
            type: "multiple",
            options: ["Palau", "Vanuatu", "Fiji"],
            answer: "Palau"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-vanuatu.jpeg' alt='Flag of Vanuatu'>",
            type: "multiple",
            options: ["Vanuatu", "Papua New Guinea", "Samoa"],
            answer: "Vanuatu"
        },
        
       
    
        {
            question: "Which countries are part of Australasia?",
            type: "checkbox",
            options: ["Australia", "New Zealand", "Fiji", "Samoa"],
            answer: ["Australia", "New Zealand"]
        },
        {
            question: "Which regions are part of Oceania?",
            type: "checkbox",
            options: ["Australasia", "Melanesia", "Micronesia", "Polynesia"],
            answer: ["Australasia", "Melanesia", "Micronesia", "Polynesia"]
        },
        {
            question: "Which cities are capitals in Australasia?",
            type: "checkbox",
            options: ["Canberra", "Wellington", "Suva", "Port Moresby"],
            answer: ["Canberra", "Wellington"]
        },
        {
            question: "Which countries have their own unique cultures?",
            type: "checkbox",
            options: ["Fiji", "Papua New Guinea", "New Zealand", "Australia"],
            answer: ["Fiji", "Papua New Guinea", "New Zealand", "Australia"]
        },
        {
            question: "Which animals are native to Australia?",
            type: "checkbox",
            options: ["Kangaroo", "Koala", "Penguin", "Crocodile"],
            answer: ["Kangaroo", "Koala", "Crocodile"]
        },
        {
            question: "Which landmarks are in Australasia?",
            type: "checkbox",
            options: ["Sydney Opera House", "Great Barrier Reef", "Uluru", "Fiordland National Park"],
            answer: ["Sydney Opera House", "Great Barrier Reef", "Uluru", "Fiordland National Park"]
        },
        {
            question: "Which of the following islands are part of Polynesia?",
            type: "checkbox",
            options: ["Hawaii", "Samoa", "Tonga", "Vanuatu"],
            answer: ["Hawaii", "Samoa", "Tonga"]
        },
        {
            question: "Which countries have coral reefs?",
            type: "checkbox",
            options: ["Australia", "Fiji", "Palau", "New Zealand"],
            answer: ["Australia", "Fiji", "Palau"]
        },
        {
            question: "Which cities are known for their harbors?",
            type: "checkbox",
            options: ["Sydney", "Auckland", "Wellington", "Suva"],
            answer: ["Sydney", "Auckland", "Wellington"]
        },
        {
            question: "Which countries are in Melanesia?",
            type: "checkbox",
            options: ["Fiji", "Papua New Guinea", "Vanuatu", "Palau"],
            answer: ["Fiji", "Papua New Guinea", "Vanuatu"]
        },
        {
            question: "Which countries are known for their rich cultural traditions?",
            type: "checkbox",
            options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
            answer: ["New Zealand", "Fiji", "Papua New Guinea"]
        },
        {
            question: "Which cities are located in Australia?",
            type: "checkbox",
            options: ["Sydney", "Melbourne", "Brisbane", "Auckland"],
            answer: ["Sydney", "Melbourne", "Brisbane"]
        },
    
        {
            question: "The capital city of Australia is ____.",
            type: "fillblank",
            answer: "Canberra"
        },
        {
            question: "The capital city of New Zealand is ____.",
            type: "fillblank",
            answer: "Wellington"
        },
        {
            question: "The Great Barrier Reef is located in ____.",
            type: "fillblank",
            answer: "Australia"
        },
        {
            question: "The largest city in New Zealand is ____.",
            type: "fillblank",
            answer: "Auckland"
        },
        {
            question: "Suva is the capital of ____.",
            type: "fillblank",
            answer: "Fiji"
        },
        {
            question: "Sydney is famous for its ____ Opera House.",
            type: "fillblank",
            answer: "Sydney"
        },
        {
            question: "Australasia includes Australia and ____.",
            type: "fillblank",
            answer: "New Zealand"
        },
        {
            question: "The most famous natural feature in Australia is the ____ Barrier Reef.",
            type: "fillblank",
            answer: "Great"
        },
        {
            question: "New Zealand's Fiordland National Park is known for its ____.",
            type: "fillblank",
            answer: "fjords"
        },
        {
            question: "Uluru is a massive sandstone ____ in Australia.",
            type: "fillblank",
            answer: "monolith"
        },
        {
            question: "The Aboriginal culture in Australia is over ____ years old.",
            type: "fillblank",
            answer: "65,000"
        },
        {
            question: "Fiji is made up of over ____ islands.",
            type: "fillblank",
            answer: "330"
        },
        { question: "What is the main feature of Kiribati's geography?", type: "checkbox", options: ["Atolls", "Volcanoes", "Coral Reefs", "Mountain Ranges"], answer: "Atolls" },
        { question: "Which city is the capital of the Marshall Islands?", type: "checkbox", options: ["Majuro", "Hagåtña", "Tarawa", "Palikir"], answer: "Majuro" },
        { question: "Which country is famous for its Rock Islands?", type: "checkbox", options: ["Palau", "Nauru", "Guam", "Solomon Islands"], answer: "Palau" },
        { question: "What is the primary language spoken in the Federated States of Micronesia?", type:"checkbox", options: ["English", "Spanish", "French", "Chinese"], answer: "English" },
        { question: "Which of the following countries is known for its vibrant coral reefs?", type: "checkbox", options: ["Fiji", "Australia", "Guam", "Vanuatu"], answer: "Fiji" },
        { question: "Which island group is located in the western Pacific Ocean and known for its historical sites?", type:"checkbox", options: ["Micronesia", "Polynesia", "Melanesia", "Australasia"], answer: "Micronesia" },
        { question: "Which country is famous for its land diving tradition?", type: "checkbox", options: ["Vanuatu", "Papua New Guinea", "Fiji", "Solomon Islands"], answer: "Vanuatu" },
        { question: "Which city serves as the capital of New Caledonia?", type: "checkbox", options: ["Nouméa", "Port Vila", "Suva", "Palikir"], answer: "Nouméa" },
        { question: "Which country is known for its ancient city of Nan Madol?", type: "checkbox", options: ["Micronesia", "Palau", "Fiji", "Australia"], answer: "Micronesia" },
        { question: "Which city is the capital of the Northern Mariana Islands?", type: "checkbox", options: ["Saipan", "Hagåtña", "Palikir", "Tarawa"], answer: "Saipan" },
        { question: "Which country has the active volcanoes of Mount Yasur and Mount Gaua?", type: "checkbox", options: ["Vanuatu", "Papua New Guinea", "New Zealand", "Fiji"], answer: "Vanuatu" },
        { question: "Which Micronesian city is known for its beautiful Tumon Bay?", type:"checkbox", options: ["Hagåtña", "Majuro", "Palikir", "Tarawa"], answer: "Hagåtña" },
        { question: "What is the capital city of Guam?", type:"checkbox", options: ["Hagåtña", "Majuro", "Palikir", "Saipan"], answer: "Hagåtña" },
        { question: "Which country is known for its lush landscapes and is part of the Coral Triangle?", type: "checkbox", options: ["Palau", "Papua New Guinea", "Vanuatu", "New Caledonia"], answer: "Papua New Guinea" },
        { question: "Which city is the capital of the Solomon Islands?", type: "checkbox", options: ["Honiara", "Port Vila", "Suva", "Majuro"], answer: "Honiara" },
        { question: "Which island nation is located in the Micronesian region and has the city of Ngerulmud as its capital?", type: "checkbox", options: ["Palau", "Marshall Islands", "Kiribati", "Federated States of Micronesia"], answer: "Palau" },
        { question: "Which city is the capital of Vanuatu?", type: "checkbox", options: ["Port Vila", "Honiara", "Suva", "Nouméa"], answer: "Port Vila" },
        { question: "What is the capital city of the Federated States of Micronesia?", type: "checkbox", options: ["Palikir", "Majuro", "Hagåtña", "Ngerulmud"], answer: "Palikir" },
        { question: "Which island nation is known for having the world's largest atoll, Kwajalein?", type: "checkbox", options: ["Marshall Islands", "Palau", "Guam", "Nauru"], answer: "Marshall Islands" },
        { question: "Which city is known as the cultural and economic center of Papua New Guinea?", type: "checkbox", options: ["Port Moresby", "Honiara", "Suva", "Tarawa"], answer: "Port Moresby" },
        { question: "Which country is famous for its stunning lagoon, the New Caledonia Lagoon?", type: "checkbox", options: ["New Caledonia", "Guam", "Fiji", "Palau"], answer: "New Caledonia" },
        { question: "Which island is known for its beautiful beaches and is part of the Mariana Islands archipelago?", type: "checkbox", options: ["Guam", "Saipan", "Majuro", "Hagåtña"], answer: "Saipan" },
        { question: "What is the largest city in New Zealand?", type: "checkbox", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: "Auckland" },
        { question: "Which country is known for the stunning beaches of Tumon Bay?", type:"checkbox", options: ["Guam", "Nauru", "Palau", "Marshall Islands"], answer: "Guam" },
        { question: "Which of these islands is NOT a part of Micronesia?", type: "checkbox", options: ["Palau", "Majuro", "Tarawa", "Nouméa"], answer: "Nouméa" },
        { question: "Which country in Oceania is known for its unique soft coral reefs?", type: "checkbox", options: ["Fiji", "New Caledonia", "Australia", "Nauru"], answer: "Fiji" },
    
            { question: "Which of the following cities are located in Micronesia? (Select all that apply)", type: "checkbox", options: ["Palikir", "Majuro", "Hagåtña", "Nouméa"], answer: ["Palikir", "Majuro", "Hagåtña"] },
            { question: "Which countries are known for their coral reefs and marine biodiversity? (Select all that apply)", type: "checkbox", options: ["Fiji", "New Caledonia", "Australia", "Palau"], answer: ["Fiji", "New Caledonia", "Australia", "Palau"] },
            { question: "Which of the following are known for their unique land formations? (Select all that apply)", type: "checkbox", options: ["Uluru", "Great Barrier Reef", "Rock Islands", "Mount Yasur"], answer: ["Uluru", "Rock Islands", "Mount Yasur"] },
            { question: "Which cities are major cultural and historical centers in Oceania? (Select all that apply)", type: "checkbox", options: ["Auckland", "Hagåtña", "Nouméa", "Suva"], answer: ["Auckland", "Hagåtña", "Suva"] },
            { question: "Which countries have significant linguistic and cultural diversity? (Select all that apply)", type: "checkbox", options: ["Papua New Guinea", "Fiji", "New Zealand", "Guam"], answer: ["Papua New Guinea", "Fiji"] },
            { question: "Which of these cities are capitals of Pacific island nations? (Select all that apply)", type: "checkbox", options: ["Port Moresby", "Suva", "Majuro", "Tarawa"], answer: ["Port Moresby", "Suva", "Majuro", "Tarawa"] },
            { question: "Which of the following countries are located in Melanesia? (Select all that apply)", type: "checkbox", options: ["Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu"], answer: ["Papua New Guinea", "Solomon Islands", "Vanuatu"] },
            { question: "Which islands are part of Polynesia? (Select all that apply)", type: "checkbox", options: ["Samoa", "Tonga", "Hawaii", "Kiribati"], answer: ["Samoa", "Tonga", "Hawaii"] },
            { question: "Which countries have stunning beaches and lagoons? (Select all that apply)", type: "checkbox", options: ["Fiji", "Guam", "New Caledonia", "Palau"], answer: ["Fiji", "Guam", "New Caledonia"] },
            { question: "Which cities are known for their natural landscapes and landmarks? (Select all that apply)", type: "checkbox", options: ["Auckland", "Sydney", "Nouméa", "Port Moresby"], answer: ["Auckland", "Sydney", "Nouméa"] },
            { question: "Which of these countries are part of Micronesia? (Select all that apply)", type: "checkbox", options: ["Palau", "Federated States of Micronesia", "Marshall Islands", "Solomon Islands"], answer: ["Palau", "Federated States of Micronesia", "Marshall Islands"] },
            { question: "Which countries are famous for their traditional cultural festivals? (Select all that apply)", type: "checkbox", options: ["Vanuatu", "Fiji", "Papua New Guinea", "Guam"], answer: ["Vanuatu", "Fiji", "Papua New Guinea"] },
            
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-fiji.jpeg' alt='Flag of Fiji'>",
              "type": "multiple",
              "options": ["Fiji", "Papua New Guinea", "Vanuatu"],
              "answer": "Fiji"
            },
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-papua-new-guinea.jpeg' alt='Flag of Papua New Guinea'>",
              "type": "multiple",
              "options": ["Papua New Guinea", "Solomon Islands", "New Caledonia"],
              "answer": "Papua New Guinea"
            },
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-vanuatu.jpeg' alt='Flag of Vanuatu'>",
              "type": "multiple",
              "options": ["Vanuatu", "Fiji", "West Papua"],
              "answer": "Vanuatu"
            },
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-solomon-islands.jpeg' alt='Flag of Solomon Islands'>",
              "type": "multiple",
              "options": ["Solomon Islands", "Vanuatu", "New Caledonia"],
              "answer": "Solomon Islands"
            },
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-new-caledonia.jpeg' alt='Flag of New Caledonia'>",
              "type": "multiple",
              "options": ["New Caledonia", "Fiji", "Papua New Guinea"],
              "answer": "New Caledonia"
            },
            {
              "question": "Which country's flag is shown below? <br><img src='flag-of-west-papua.jpeg' alt='Flag of West Papua'>",
              "type": "multiple",
              "options": ["West Papua", "Solomon Islands", "Vanuatu"],
              "answer": "West Papua"
            },
            
            
                 
                
               
                  {
                    question: "Which countries are part of Melanesia?",
                    type: "checkbox",
                    options: ["Fiji", "Papua New Guinea", "Samoa", "Solomon Islands"],
                    answer: ["Fiji", "Papua New Guinea", "Solomon Islands"]
                  },
                  {
                    question: "Which cities are in Melanesia?",
                    type: "checkbox",
                    options: ["Port Moresby", "Suva", "Honiara", "Wellington"],
                    answer: ["Port Moresby", "Suva", "Honiara"]
                  },
                  {
                    question: "Which of the following are natural features of Melanesia?",
                    type: "checkbox",
                    options: ["Coral Reefs", "Glaciers", "Rainforests", "Active Volcanoes"],
                    answer: ["Coral Reefs", "Rainforests", "Active Volcanoes"]
                  },
                  {
                    question: "Which languages are spoken in Papua New Guinea?",
                    type: "checkbox",
                    options: ["Tok Pisin", "French", "Hiri Motu", "Danish"],
                    answer: ["Tok Pisin", "Hiri Motu"]
                  },
                  {
                    question: "Which cities are capitals of Melanesian countries?",
                    type: "checkbox",
                    options: ["Port Vila", "Nouméa", "Suva", "Ngerulmud"],
                    answer: ["Port Vila", "Nouméa", "Suva"]
                  },
                  {
                    question: "Which of the following are famous places in Melanesia?",
                    type: "checkbox",
                    options: ["Great Barrier Reef", "Nan Madol", "Rock Islands", "Fiordland"],
                    answer: ["Nan Madol", "Rock Islands"]
                  },
                  {
                    question: "Which traditional activities are practiced in Vanuatu?",
                    type: "checkbox",
                    options: ["Land Diving", "Bungee Jumping", "Hula Dancing", "Spear Fishing"],
                    answer: ["Land Diving", "Spear Fishing"]
                  },
                  {
                    question: "Which natural landmarks are found in New Caledonia?",
                    type: "checkbox",
                    options: ["Lagoon", "Uluru", "Fjords", "Rock Islands"],
                    answer: ["Lagoon"]
                  },
                  {
                    question: "Which cities are cultural hubs in Melanesia?",
                    type: "checkbox",
                    options: ["Port Moresby", "Nouméa", "Sydney", "Auckland"],
                    answer: ["Port Moresby", "Nouméa"]
                  },
                  {
                    question: "Which Melanesian countries have active volcanoes?",
                    type: "checkbox",
                    options: ["Vanuatu", "Fiji", "New Caledonia", "Papua New Guinea"],
                    answer: ["Vanuatu", "Papua New Guinea"]
                  },
                  {
                    question: "Which animals are commonly found in Melanesia?",
                    type: "checkbox",
                    options: ["Kangaroos", "Birds of Paradise", "Coral Trout", "Kiwi Birds"],
                    answer: ["Birds of Paradise", "Coral Trout"]
                  },
                  {
                    question: "Which of the following are Melanesian festivals?",
                    type: "checkbox",
                    options: ["Fiji Day", "Independence Day", "Yam Festival", "Waitangi Day"],
                    answer: ["Fiji Day", "Yam Festival"]
                  },
                
                  {
                    question: "The capital city of Fiji is ____.",
                    type: "fillblank",
                    answer: "Suva"
                  },
                  {
                    question: "Melanesia is known for its ____ beaches and lush forests.",
                    type: "fillblank",
                    answer: "stunning"
                  },
                  {
                    question: "The indigenous people of Papua New Guinea live in the ____.",
                    type: "fillblank",
                    answer: "highlands"
                  },
                  {
                    question: "Vanuatu is famous for its ____ ceremonies, where people jump from wooden towers.",
                    type: "fillblank",
                    answer: "land diving"
                  },
                  {
                    question: "The lagoon in New Caledonia is one of the largest in the ____.",
                    type: "fillblank",
                    answer: "world"
                  },
                  {
                    question: "Port Moresby is the capital city of ____.",
                    type: "fillblank",
                    answer: "Papua New Guinea"
                  },
                  {
                    question: "The Solomon Islands are known for their ____ communities.",
                    type: "fillblank",
                    answer: "friendly"
                  },
                  {
                    question: "The coral reefs in Melanesia are ____ for their beauty and biodiversity.",
                    type: "fillblank",
                    answer: "famous"
                  },
                  {
                    question: "Honiara is the capital city of the ____ Islands.",
                    type: "fillblank",
                    answer: "Solomon"
                  },
                  {
                    question: "The people of West Papua speak over ____ different languages.",
                    type: "fillblank",
                    answer: "800"
                  },
                  {
                    question: "New Caledonia's capital city is ____.",
                    type: "fillblank",
                    answer: "Nouméa"
                  },
                  {
                    question: "Melanesia is part of the larger region of ____.",
                    type: "fillblank",
                    answer: "Oceania"
                  }
                

];


let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 50);
    displayQuestions();
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = generateQuestionHTML(question, index);
        questionsContainer.appendChild(questionDiv);
    });
}

function generateQuestionHTML(question, index) {
    switch (question.type) {
        case 'truefalse':
            return `
                <p>${index + 1}. ${question.question}</p>
                <label><input type="radio" name="question-${index}" value="true"> True</label>
                <label><input type="radio" name="question-${index}" value="false"> False</label>
            `;
        case 'fillblank':
            return `
                <p>${index + 1}. ${question.question}</p>
                <input type="text" name="question-${index}">
            `;
        case 'multiple':
            return `
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map(option => `
                    <label><input type="radio" name="question-${index}" value="${option}"> ${option}</label>
                `).join('')}
            `;
        case 'checkbox':
            return `
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map(option => `
                    <label><input type="checkbox" name="question-${index}" value="${option}"> ${option}</label>
                `).join('')}
            `;
        default:
            return '';
    }
}

function submitAnswers() {
    correctAnswers = 0;
    const corrections = [];
    selectedQuestions.forEach((question, index) => {
        const userAnswer = getUserAnswer(question, index);
        const isCorrect = checkAnswer(question, userAnswer);
        if (isCorrect) {
            correctAnswers++;
        } else {
            corrections.push({
                question: question.question,
                correctAnswer: question.answer,
                userAnswer
            });
        }
    });
    displayResults(corrections);
}

function getUserAnswer(question, index) {
    switch (question.type) {
        case 'truefalse':
        case 'multiple':
            return document.querySelector(`input[name="question-${index}"]:checked`)?.value || '';
        case 'fillblank':
            return document.querySelector(`input[name="question-${index}"]`).value.trim();
        case 'checkbox':
            return Array.from(document.querySelectorAll(`input[name="question-${index}"]:checked`)).map(input => input.value);
        default:
            return '';
    }
}

function checkAnswer(question, userAnswer) {
    if (Array.isArray(question.answer)) {
        return JSON.stringify(question.answer.sort()) === JSON.stringify(userAnswer.sort());
    }
    return question.answer.toString().toLowerCase() === userAnswer.toString().toLowerCase();
}

function displayResults(corrections) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 50 correct!`;
    const correctionsContainer = document.getElementById('corrections');
    correctionsContainer.innerHTML = corrections.map(correction => `
        <div>
            <p>${correction.question}</p>
            <p class="${correction.userAnswer.toString().toLowerCase() === correction.correctAnswer.toString().toLowerCase() ? 'correct' : 'incorrect'}">
                Your Answer: ${Array.isArray(correction.userAnswer) ? correction.userAnswer.join(', ') : correction.userAnswer}
            </p>
            <p class="correct">Correct Answer: ${Array.isArray(correction.correctAnswer) ? correction.correctAnswer.join(', ') : correction.correctAnswer}</p>
        </div>
    `).join('');
  // Scroll to the top of the page after displaying the results
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
