const questions =[
  
   
    { question: "The Amazon Rainforest is the largest tropical rainforest in the world.", type: "truefalse", answer: true },
    { question: "The Amazon River is the second longest river in the world.", type: "truefalse", answer: true },
    { question: "The Andes Mountains are the longest continental mountain range.", type: "truefalse", answer: true },
    { question: "Brazil is the smallest country in South America.", type: "truefalse", answer: false },
    { question: "Brazil's capital city is Rio de Janeiro.", type: "truefalse", answer: false },
    { question: "Machu Picchu is located in Argentina.", type: "truefalse", answer: false },
    { question: "The Atacama Desert is one of the driest places on Earth.", type: "truefalse", answer: true },
    { question: "Spanish is the most widely spoken language in South America.", type: "truefalse", answer: true },
    { question: "The Christ the Redeemer statue is in Brazil.", type: "truefalse", answer: true },
    { question: "Buenos Aires is the capital of Chile.", type: "truefalse", answer: false },
    { question: "The Amazon Rainforest produces 20% of the world's oxygen.", type: "truefalse", answer: true },
    { question: "Carnival is one of the largest festivals in the world.", type: "truefalse", answer: true },
    { question: "São Paulo is the capital city of Brazil.", type: "truefalse", answer: false },
    { question: "Brazil is the only Portuguese-speaking country in South America.", type: "truefalse", answer: true },
    { question: "The tango dance originated in Argentina.", type: "truefalse", answer: true },
    { question: "Brazil was the first country in South America to gain independence.", type: "truefalse", answer: false },
    { question: "The Iguazu Falls are located on the border between Argentina and Brazil.", type: "truefalse", answer: true },
    { question: "Argentina is the second-largest country in South America.", type: "truefalse", answer: true },
    { question: "The capital of Argentina is Mendoza.", type: "truefalse", answer: false },
    { question: "The Andes Mountains extend through seven South American countries.", type: "truefalse", answer: true },
    { question: "Brazil’s Carnival is famous for its samba music.", type: "truefalse", answer: true },
    { question: "Eva Perón was a political leader in Argentina.", type: "truefalse", answer: true },
    { question: "Suriname is the smallest country in South America.", type: "truefalse", answer: true },
    { question: "Argentina's economy is primarily based on agriculture.", type: "truefalse", answer: true },
    { question: "Simón Bolívar is known as the Liberator of South America.", type: "truefalse", answer: true },
    { question: "Buenos Aires is famous for its European-style architecture.", type: "truefalse", answer: true },
    { question: "Rio de Janeiro is the largest city in Brazil.", type: "truefalse", answer: false },
    { question: "Argentina is known for its production of beef.", type: "truefalse", answer: true },
    { question: "Machu Picchu is one of the New Seven Wonders of the World.", type: "truefalse", answer: true },
    { question: "Brazil’s official language is Spanish.", type: "truefalse", answer: false },

    // Fill-in-the-Blank Questions
    { question: "The largest tropical rainforest in the world is the ____ Rainforest.", type: "fillblank", answer: "Amazon" },
    { question: "The second-longest river in the world is the ____ River.", type: "fillblank", answer: "Amazon" },
    { question: "The capital of Brazil is ____.", type: "fillblank", answer: "Brasília" },
    { question: "The tallest mountain in South America is ____.", type: "fillblank", answer: "Aconcagua" },
    { question: "The official language of Brazil is ____.", type: "fillblank", answer: "Portuguese" },
    { question: "____ is the largest producer of coffee in the world.", type: "fillblank", answer: "Brazil" },
    { question: "The ____ Desert is one of the driest places on Earth.", type: "fillblank", answer: "Atacama" },
    { question: "____ is the capital city of Argentina.", type: "fillblank", answer: "Buenos Aires" },
    { question: "The famous statue in Rio de Janeiro is called ____.", type: "fillblank", answer: "Christ the Redeemer" },
    { question: "The ____ Mountains are the longest continental mountain range.", type: "fillblank", answer: "Andes" },
    { question: "Brazil's Carnival is famous for its ____ music.", type: "fillblank", answer: "samba" },
    { question: "____ is known for its tango music and dance.", type: "fillblank", answer: "Argentina" },
    { question: "The continent of South America has ____ countries.", type: "fillblank", answer: "12" },
    { question: "Machu Picchu is located in ____.", type: "fillblank", answer: "Peru" },
    { question: "Brazil’s largest city is ____.", type: "fillblank", answer: "São Paulo" },
    { question: "The Amazon Rainforest is located in ____.", type: "fillblank", answer: "Brazil" },
    { question: "____ is known as the Liberator of South America.", type: "fillblank", answer: "Simón Bolívar" },
    { question: "The ____ River is the largest river by discharge in the world.", type: "fillblank", answer: "Amazon" },
    { question: "____ is the smallest country in South America.", type: "fillblank", answer: "Suriname" },
    { question: "The ____ Falls are one of the largest waterfall systems in the world.", type: "fillblank", answer: "Iguazu" },
    { question: "The ____ region in Argentina is known for its glaciers and unique wildlife.", type: "fillblank", answer: "Patagonia" },
    { question: "____ is the capital city of Peru.", type: "fillblank", answer: "Lima" },
    { question: "The Amazon Rainforest produces 20% of the world's ____ supply.", type: "fillblank", answer: "oxygen" },
    { question: "Argentina is home to the highest peak in the Americas, ____.", type: "fillblank", answer: "Aconcagua" },
    { question: "The name 'Argentina' comes from the Latin word for ____.", type: "fillblank", answer: "silver" },
    { question: "Brazil’s capital, ____ , was built in just 41 months.", type: "fillblank", answer: "Brasília" },
    { question: "The city of ____ is known for its European-style architecture.", type: "fillblank", answer: "Buenos Aires" },
    { question: "The largest river in Brazil is the ____ River.", type: "fillblank", answer: "Amazon" },
    { question: "The ____ statue in Rio de Janeiro is one of the New Seven Wonders of the World.", type: "fillblank", answer: "Christ the Redeemer" },
    { question: "The ____ dance originated in Buenos Aires, Argentina.", type: "fillblank", answer: "tango" },

    // Radio Button Questions (Multiple Choice)
    { question: "Which country is home to the Amazon Rainforest?", type: "multiple", options: ["Brazil", "Peru", "Colombia"], answer: "Brazil" },
    { question: "What is the capital city of Argentina?", type: "multiple", options: ["Buenos Aires", "Lima", "Santiago"], answer: "Buenos Aires" },
    { question: "Which mountain range stretches along the western edge of South America?", type: "multiple", options: ["Andes", "Rockies", "Himalayas"], answer: "Andes" },
    { question: "What is the official language of Brazil?", type: "multiple", options: ["Spanish", "Portuguese", "French"], answer: "Portuguese" },
    { question: "Which river is the second-longest in the world?", type: "multiple", options: ["Amazon", "Nile", "Mississippi"], answer: "Amazon" },
    { question: "Which country is known for its Carnival festival?", type: "multiple", options: ["Brazil", "Argentina", "Chile"], answer: "Brazil" },
    { question: "In which country is Machu Picchu located?", type: "multiple", options: ["Peru", "Argentina", "Brazil"], answer: "Peru" },
    { question: "Which city is famous for its Christ the Redeemer statue?", type: "multiple", options: ["Rio de Janeiro", "São Paulo", "Buenos Aires"], answer: "Rio de Janeiro" },
    { question: "Which desert is one of the driest places on Earth?", type: "multiple", options: ["Atacama", "Sahara", "Gobi"], answer: "Atacama" },
    { question: "Which country is the largest coffee producer in the world?", type: "multiple", options: ["Brazil", "Colombia", "Vietnam"], answer: "Brazil" },
    { question: "Which city is the largest in Brazil?", type: "multiple", options: ["São Paulo", "Rio de Janeiro", "Brasília"], answer: "São Paulo" },
    { question: "Which country is the smallest in South America?", type: "multiple", options: ["Suriname", "Guyana", "Uruguay"], answer: "Suriname" },
    { question: "Which dance originated in Buenos Aires?", type: "multiple", options: ["Tango", "Samba", "Flamenco"], answer: "Tango" },
    { question: "Which natural wonder is located in Brazil?", type: "multiple", options: ["Amazon Rainforest", "Grand Canyon", "Victoria Falls"], answer: "Amazon Rainforest" },
    { question: "Which city is the capital of Brazil?", type: "multiple", options: ["Brasília", "São Paulo", "Rio de Janeiro"], answer: "Brasília" },
    { question: "Which continent is home to the Andes Mountains?", type: "multiple", options: ["South America", "Asia", "North America"], answer: "South America" },
    { question: "Which country in South America has the highest peak?", type: "multiple", options: ["Argentina", "Brazil", "Chile"], answer: "Argentina" },
    { question: "Which city is known for its European-style architecture?", type: "multiple", options: ["Buenos Aires", "Brasília", "Lima"], answer: "Buenos Aires" },
    { question: "Which country is famous for the Iguazu Falls?", type: "multiple", options: ["Argentina", "Brazil", "Venezuela"], answer: "Argentina" },
    { question: "Which country has the city of Lima?", type: "multiple", options: ["Peru", "Brazil", "Argentina"], answer: "Peru" },
    { question: "Which country is famous for tango music?", type: "multiple", options: ["Argentina", "Brazil", "Chile"], answer: "Argentina" },
    { question: "Which Brazilian city is known for its Carnival festival?", type: "multiple", options: ["Rio de Janeiro", "São Paulo", "Salvador"], answer: "Rio de Janeiro" },
    { question: "Which country is known as the largest in South America?", type: "multiple", options: ["Brazil", "Argentina", "Colombia"], answer: "Brazil" },
    { question: "Which city is the capital of Argentina?", type: "multiple", options: ["Buenos Aires", "Córdoba", "Rosario"], answer: "Buenos Aires" },
    { question: "Which country is home to the Pampas?", type: "multiple", options: ["Argentina", "Brazil", "Peru"], answer: "Argentina" },
    { question: "Which continent has the most biodiversity?", type: "multiple", options: ["South America", "Africa", "Asia"], answer: "South America" },
    { question: "Which country is known for producing soccer legends like Pelé?", type: "multiple", options: ["Brazil", "Argentina", "Chile"], answer: "Brazil" },
    { question: "Which river is the largest by discharge in the world?", type: "multiple", options: ["Amazon", "Nile", "Yangtze"], answer: "Amazon" },
    { question: "Which country in South America is known for its coffee production?", type: "multiple", options: ["Brazil", "Colombia", "Peru"], answer: "Brazil" },
    { question: "Which natural wonder is located on the border of Brazil and Argentina?", type: "multiple", options: ["Iguazu Falls", "Niagara Falls", "Victoria Falls"], answer: "Iguazu Falls" },

    // Checkbox Questions
    { question: "Which countries are located in South America?", type: "checkbox", options: ["Brazil", "Argentina", "Peru", "Canada"], answer: ["Brazil", "Argentina", "Peru"] },
    { question: "Which of the following are South American capitals?", type: "checkbox", options: ["Buenos Aires", "Brasília", "Lima", "Tokyo"], answer: ["Buenos Aires", "Brasília", "Lima"] },
    { question: "Which natural wonders are found in South America?", type: "checkbox", options: ["Amazon Rainforest", "Andes Mountains", "Iguazu Falls", "Sahara Desert"], answer: ["Amazon Rainforest", "Andes Mountains", "Iguazu Falls"] },
    { question: "Which countries speak Spanish in South America?", type: "checkbox", options: ["Argentina", "Chile", "Brazil", "Colombia"], answer: ["Argentina", "Chile", "Colombia"] },
    { question: "Which are major cities in Brazil?", type: "checkbox", options: ["São Paulo", "Rio de Janeiro", "Salvador", "Bogotá"], answer: ["São Paulo", "Rio de Janeiro", "Salvador"] },
    { question: "Which countries are famous for tango music?", type: "checkbox", options: ["Argentina", "Uruguay", "Peru", "Mexico"], answer: ["Argentina", "Uruguay"] },
    { question: "Which natural landscapes are found in Argentina?", type: "checkbox", options: ["Andes Mountains", "Pampas", "Patagonia", "Sahara Desert"], answer: ["Andes Mountains", "Pampas", "Patagonia"] },
    { question: "Which countries have significant portions of the Amazon Rainforest?", type: "checkbox", options: ["Brazil", "Peru", "Colombia", "Venezuela"], answer: ["Brazil", "Peru", "Colombia"] },
    { question: "Which of the following are Brazilian states?", type: "checkbox", options: ["São Paulo", "Bahia", "Minas Gerais", "Buenos Aires"], answer: ["São Paulo", "Bahia", "Minas Gerais"] },
    { question: "Which of these are South American rivers?", type: "checkbox", options: ["Amazon River", "Paraná River", "Orinoco River", "Nile River"], answer: ["Amazon River", "Paraná River", "Orinoco River"] },
    { question: "Which South American countries are known for their coffee production?", type: "checkbox", options: ["Brazil", "Colombia", "Peru", "Venezuela"], answer: ["Brazil", "Colombia", "Peru"] },
    { question: "Which of these are cultural festivals in South America?", type: "checkbox", options: ["Carnival", "Day of the Dead", "Oktoberfest", "Inti Raymi"], answer: ["Carnival", "Inti Raymi"] },
    { question: "Which countries have a coast on the Atlantic Ocean?", type: "checkbox", options: ["Brazil", "Argentina", "Uruguay", "Bolivia"], answer: ["Brazil", "Argentina", "Uruguay"] },
    { question: "Which capitals are known for their European-style architecture?", type: "checkbox", options: ["Buenos Aires", "Lima", "Brasília", "Paris"], answer: ["Buenos Aires", "Lima", "Brasília"] },
    { question: "Which cities in Argentina are major cultural centers?", type: "checkbox", options: ["Buenos Aires", "Córdoba", "Rosario", "Rio de Janeiro"], answer: ["Buenos Aires", "Córdoba", "Rosario"] },
    { question: "Which countries in South America share a border with Brazil?", type: "checkbox", options: ["Argentina", "Peru", "Uruguay", "Canada"], answer: ["Argentina", "Peru", "Uruguay"] },
    { question: "Which of these are South American languages?", type: "checkbox", options: ["Spanish", "Portuguese", "Quechua", "Mandarin"], answer: ["Spanish", "Portuguese", "Quechua"] },
    { question: "Which South American countries have significant Indigenous populations?", type: "checkbox", options: ["Peru", "Bolivia", "Ecuador", "Chile"], answer: ["Peru", "Bolivia", "Ecuador", "Chile"] },
    { question: "Which of these are mountain ranges in South America?", type: "checkbox", options: ["Andes", "Rockies", "Appalachians", "Sierra Nevada"], answer: ["Andes"] },
    { question: "Which of these are South American deserts?", type: "checkbox", options: ["Atacama", "Sahara", "Gobi", "Sonoran"], answer: ["Atacama"] },
    { question: "Which South American countries have hosted the FIFA World Cup?", type: "checkbox", options: ["Brazil", "Argentina", "Chile", "Uruguay"], answer: ["Brazil", "Argentina", "Chile", "Uruguay"] },
    { question: "Which countries are known for producing beef in South America?", type: "checkbox", options: ["Argentina", "Brazil", "Uruguay", "Venezuela"], answer: ["Argentina", "Brazil", "Uruguay"] },
    { question: "Which South American countries have significant rainforest areas?", type: "checkbox", options: ["Brazil", "Peru", "Colombia", "Ecuador"], answer: ["Brazil", "Peru", "Colombia", "Ecuador"] },
    { question: "Which countries have notable mountain peaks in South America?", type: "checkbox", options: ["Argentina", "Chile", "Peru", "Uruguay"], answer: ["Argentina", "Chile", "Peru"] },
    { question: "Which of these are famous natural attractions in South America?", type: "checkbox", options: ["Amazon Rainforest", "Andes Mountains", "Iguazu Falls", "Rocky Mountains"], answer: ["Amazon Rainforest", "Andes Mountains", "Iguazu Falls"] },
    { question: "Which South American capitals have hosted the Olympic Games?", type: "checkbox", options: ["Rio de Janeiro", "Buenos Aires", "Lima", "Caracas"], answer: ["Rio de Janeiro"] },
    { question: "Which of these are famous waterfalls in South America?", type: "checkbox", options: ["Iguazu Falls", "Angel Falls", "Victoria Falls", "Niagara Falls"], answer: ["Iguazu Falls", "Angel Falls"] },
    { question: "Which countries in South America are famous for producing wine?", type: "checkbox", options: ["Argentina", "Chile", "Brazil", "Peru"], answer: ["Argentina", "Chile"] },
    { question: "Which South American countries have a tropical climate?", type: "checkbox", options: ["Brazil", "Venezuela", "Colombia", "Argentina"], answer: ["Brazil", "Venezuela", "Colombia"] },
    { question: "Which countries in South America are known for their vibrant music and dance cultures?", type: "checkbox", options: ["Brazil", "Argentina", "Colombia", "Chile"], answer: ["Brazil", "Argentina", "Colombia"] },

   // Image-Based Questions
   {
    question: "Identify this famous statue in Brazil. <br><img src='christ_redeemer.jpeg' alt='Christ the Redeemer'>",
    type: "multiple",
    options: ["Christ the Redeemer", "Statue of Liberty", "Eiffel Tower"],
    answer: "Christ the Redeemer"
},
{
    question: "Which famous landmark is shown in this image? <br><img src='machu.jpeg' alt='Machu Picchu'>",
    type: "multiple",
    options: ["Machu Picchu", "Great Wall of China", "Stonehenge"],
    answer: "Machu Picchu"
},
{
    question: "Identify this natural wonder located on the border of Brazil and Argentina. <br><img src='iguazu_falls.jpeg' alt='Iguazu Falls'>",
    type: "multiple",
    options: ["Iguazu Falls", "Niagara Falls", "Victoria Falls"],
    answer: "Iguazu Falls"
},
{
    question: "Which mountain range is depicted in this image? <br><img src='andes.jpeg' alt='Andes Mountains'>",
    type: "multiple",
    options: ["Andes", "Himalayas", "Rockies"],
    answer: "Andes"
},
{
    question: "Identify this Brazilian city known for its Carnival festival. <br><img src='Rio.jpeg' alt='Rio Carnival'>",
    type: "multiple",
    options: ["Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Rio de Janeiro"
},
{
    question: "Which famous South American river is shown in this image? <br><img src='amazon-river.jpeg' alt='Amazon River'>",
    type: "multiple",
    options: ["Amazon River", "Nile River", "Mississippi River"],
    answer: "Amazon River"
},
{
    question: "Identify this famous Argentine dance. <br><img src='tango-dance.jpeg' alt='Tango Dance'>",
    type: "multiple",
    options: ["Tango", "Samba", "Flamenco"],
    answer: "Tango"
},
{
    question: "Which country's flag is depicted in this image? <br><img src='flag-of-brazil.jpeg' alt='Flag of Brazil'>",
    type: "multiple",
    options: ["Brazil", "Argentina", "Chile"],
    answer: "Brazil"
},
{
    question: "Identify this famous soccer player from Argentina. <br><img src='lionel-messi.jpeg' alt='Lionel Messi'>",
    type: "multiple",
    options: ["Lionel Messi", "Pelé", "Cristiano Ronaldo"],
    answer: "Lionel Messi"
},
{
    question: "Which South American desert is shown in this image? <br><img src='atacama.jpeg' alt='Atacama Desert'>",
    type: "multiple",
    options: ["Atacama", "Sahara", "Gobi"],
    answer: "Atacama"
},
{
    question: "Identify this famous ancient city located in Peru. <br><img src='machu.jpeg' alt='Machu Picchu'>",
    type: "multiple",
    options: ["Machu Picchu", "Petra", "Angkor Wat"],
    answer: "Machu Picchu"
},
{
    question: "Which famous waterfall is shown in this image? <br><img src='Iguazu.jpeg' alt='Iguazu Falls'>",
    type: "multiple",
    options: ["Iguazu Falls", "Angel Falls", "Victoria Falls"],
    answer: "Iguazu Falls"
},
{
    question: "Identify this famous river located in South America. <br><img src='amazon-river.jpeg' alt='Amazon River'>",
    type: "multiple",
    options: ["Amazon River", "Yangtze River", "Ganges River"],
    answer: "Amazon River"
},
{
    question: "Which mountain is depicted in this image? <br><img src='aconcagua_mountain.jpeg' alt='Aconcagua Mountain'>",
    type: "multiple",
    options: ["Aconcagua", "Mount Everest", "Kilimanjaro"],
    answer: "Aconcagua"
},
{
    question: "Identify this South American city known for its European-style architecture. <br><img src='buenos_aires.jpeg' alt='Buenos Aires'>",
    type: "multiple",
    options: ["Buenos Aires", "Lima", "Brasília"],
    answer: "Buenos Aires"
},
{
    question: "Which country is represented by this flag? <br><img src='flag-of-argentina.jpeg' alt='Flag of Argentina'>",
    type: "multiple",
    options: ["Argentina", "Brazil", "Uruguay"],
    answer: "Argentina"
},
{
    question: "Identify this famous Incan archaeological site. <br><img src='machu.jpeg' alt='Machu Picchu'>",
    type: "multiple",
    options: ["Machu Picchu", "Chichen Itza", "Pyramids of Giza"],
    answer: "Machu Picchu"
},
{
    question: "Which famous Brazilian beach is shown in this image? <br><img src='copacabana_beach.jpeg' alt='Copacabana Beach'>",
    type: "multiple",
    options: ["Copacabana Beach", "Bondi Beach", "Venice Beach"],
    answer: "Copacabana Beach"
},
{
    question: "Identify this famous soccer player from Brazil. <br><img src='pele.jpeg' alt='Pelé'>",
    type: "multiple",
    options: ["Pelé", "Diego Maradona", "Lionel Messi"],
    answer: "Pelé"
},

{
    question: "Identify this iconic South American mountain range. <br><img src='andes.jpeg' alt='Andes Mountains'>",
    type: "multiple",
    options: ["Andes", "Rockies", "Himalayas"],
    answer: "Andes"
},
{
    question: "Which country's flag is depicted in this image? <br><img src='flag-of-chile.jpeg' alt='Flag of Chile'>",
    type: "multiple",
    options: ["Chile", "Argentina", "Peru"],
    answer: "Chile"
},
{
    question: "which famous waterfall located in Venezuela. ",
    type: "multiple",
    options: ["Angel Falls", "Iguazu Falls", "Victoria Falls"],
    answer: "Angel Falls"
},
{
    question: "Which South American capital city is shown in this image? <br><img src='Lima.jpeg' alt='Lima'>",
    type: "multiple",
    options: ["Lima", "Brasília", "Buenos Aires"],
    answer: "Lima"
},
{
    question: "Identify this famous desert located in South America. <br><img src='atacama.jpeg' alt='Atacama Desert'>",
    type: "multiple",
    options: ["Atacama", "Sahara", "Gobi"],
    answer: "Atacama"
},
{
    question: "Which country's flag is depicted in this image? <br><img src='flag-of-venezuela.jpeg' alt='Flag of Venezuela'>",
    type: "multiple",
    options: ["Venezuela", "Colombia", "Ecuador"],
    answer: "Venezuela"
},
{
    question: "Identify this famous South American natural wonder. <br><img src='Iguazu.jpeg' alt='Iguazu Falls'>",
    type: "multiple",
    options: ["Iguazu Falls", "Angel Falls", "Victoria Falls"],
    answer: "Iguazu Falls"
},
{
    question: "Which South American city is shown in this image? <br><img src='sao_paulo.jpeg' alt='São Paulo'>",
    type: "multiple",
    options: ["São Paulo", "Rio de Janeiro", "Brasília"],
    answer: "São Paulo"
},
{
    question: "Which famous South American festival  found in list below?. ",
    type: "multiple",
    options: ["Carnival", "Oktoberfest", "Mardi Gras"],
    answer: "Carnival"
},
    
    { question: "The Amazon River, which flows through Peru, is the second-longest river in the world.", type: "truefalse", answer: true },
    { question: "Lima is the capital city of Peru.", type: "truefalse", answer: true },
    { question: "The Andean Condor, the world's largest flying bird, is native to Peru.", type: "truefalse", answer: true },
    { question: "Machu Picchu is located in Colombia.", type: "truefalse", answer: false },
    { question: "The official language of Colombia is Portuguese.", type: "truefalse", answer: false },
    { question: "Colombia is the leading producer of emeralds in the world.", type: "truefalse", answer: true },
    { question: "The Atacama Desert is one of the wettest places on Earth.", type: "truefalse", answer: false },
    { question: "Santiago is the capital city of Chile.", type: "truefalse", answer: true },
    { question: "Chile stretches over 4,300 kilometers from north to south.", type: "truefalse", answer: true },
    { question: "Peru's official language is Spanish.", type: "truefalse", answer: true },
    { question: "Cusco was the historic capital of the Inca Empire.", type: "truefalse", answer: true },
    { question: "The Nazca Lines are located in Colombia.", type: "truefalse", answer: false },
    { question: "Lake Titicaca is the highest navigable lake in the world.", type: "truefalse", answer: true },
    { question: "Ceviche is a traditional dish from Chile.", type: "truefalse", answer: false },
    { question: "The Andes Mountains run through Chile.", type: "truefalse", answer: true },
    { question: "The Amazon River starts in Peru.", type: "truefalse", answer: false },
    { question: "Peru has more than 3,000 different varieties of potatoes.", type: "truefalse", answer: true },
    { question: "Mario Vargas Llosa is a celebrated Peruvian author.", type: "truefalse", answer: true },
    { question: "Caño Cristales, known as the 'River of Five Colors,' is located in Colombia.", type: "truefalse", answer: true },
    { question: "The Atacama Desert is located in Peru.", type: "truefalse", answer: false },
    { question: "Peru was home to the ancient Inca civilization.", type: "truefalse", answer: true },
    { question: "Medellín is known as the 'City of Eternal Spring.'", type: "truefalse", answer: true },
    { question: "Easter Island is part of Peru.", type: "truefalse", answer: false },
    { question: "The official language of Chile is Spanish.", type: "truefalse", answer: true },
    { question: "Arequipa is known as the 'White City' due to its buildings made from white volcanic stone.", type: "truefalse", answer: true },
    { question: "The Atacama Desert is one of the driest places on Earth.", type: "truefalse", answer: true },
    { question: "Cusco is the gateway to Machu Picchu.", type: "truefalse", answer: true },
    { question: "Gabriel García Márquez is a Nobel Prize-winning author from Colombia.", type: "truefalse", answer: true },
    { question: "The Amazon River flows through Chile.", type: "truefalse", answer: false },
    { question: "The Andes Mountains run through Peru, Colombia, and Chile.", type: "truefalse", answer: true },

    // Multiple Choice Questions (30)
    { question: "Which of the following is the capital city of Peru?", type: "multiple", options: ["Lima", "Bogotá", "Santiago"], answer: "Lima" },
    { question: "Which country is home to Machu Picchu?", type: "multiple", options: ["Peru", "Chile", "Colombia"], answer: "Peru" },
    { question: "Which dish is a traditional Peruvian cuisine?", type: "multiple", options: ["Ceviche", "Empanadas", "Tacos"], answer: "Ceviche" },
    { question: "Which of these cities is known as the 'Salsa Capital of the World'?", type: "multiple", options: ["Medellín", "Cali", "Santiago"], answer: "Cali" },
    { question: "Who is a famous Nobel Prize-winning author from Colombia?", type: "multiple", options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Pablo Neruda"], answer: "Gabriel García Márquez" },
    { question: "Which desert is located in Chile?", type: "multiple", options: ["Atacama", "Sahara", "Gobi"], answer: "Atacama" },
    { question: "Which country is known for the Andes Mountains?", type: "multiple", options: ["Chile", "Peru", "Both"], answer: "Both" },
    { question: "Which is the capital city of Chile?", type: "multiple", options: ["Santiago", "Valparaíso", "Lima"], answer: "Santiago" },
    { question: "Which of the following is a natural wonder in Colombia?", type: "multiple", options: ["Caño Cristales", "Lake Titicaca", "Nazca Lines"], answer: "Caño Cristales" },
    { question: "Which famous archaeological site is located in Peru?", type: "multiple", options: ["Machu Picchu", "Easter Island", "Tayrona National Park"], answer: "Machu Picchu" },
    { question: "Which river starts in Colombia?", type: "multiple", options: ["Amazon", "Nile", "Mississippi"], answer: "Amazon" },
    { question: "Which of these cities is the capital of Colombia?", type: "multiple", options: ["Lima", "Santiago", "Bogotá"], answer: "Bogotá" },
    { question: "Which traditional music is popular in Chile?", type: "multiple", options: ["Cueca", "Salsa", "Vallenato"], answer: "Cueca" },
    { question: "Which famous site is found on Easter Island?", type: "multiple", options: ["Moai statues", "Machu Picchu", "Nazca Lines"], answer: "Moai statues" },
    { question: "Which Peruvian city was the historic capital of the Inca Empire?", type: "multiple", options: ["Cusco", "Lima", "Arequipa"], answer: "Cusco" },
    { question: "Which is a popular dish in Chile?", type: "multiple", options: ["Empanadas", "Ceviche", "Tacos"], answer: "Empanadas" },
    { question: "Which of these is a famous festival in Colombia?", type: "multiple", options: ["Carnival of Barranquilla", "Inti Raymi", "Tapati Festival"], answer: "Carnival of Barranquilla" },
    { question: "Which country is known for producing high-quality wines, particularly the Carmenere variety?", type: "multiple", options: ["Chile", "Peru", "Colombia"], answer: "Chile" },
    { question: "Which Peruvian city is known as the 'White City'?", type: "multiple", options: ["Arequipa", "Cusco", "Lima"], answer: "Arequipa" },
    { question: "Which is a popular musical genre in Colombia?", type: "multiple", options: ["Cumbia", "Cueca", "Tango"], answer: "Cumbia" },
    { question: "Which city in Chile is known for its colorful houses and vibrant arts scene?", type: "multiple", options: ["Valparaíso", "Concepción", "Santiago"], answer: "Valparaíso" },
    { question: "Which natural wonder is found in Peru?", type: "multiple", options: ["Nazca Lines", "Caño Cristales", "Cocora Valley"], answer: "Nazca Lines" },
    { question: "Which Colombian city is known as the 'City of Eternal Spring'?", type: "multiple", options: ["Cali", "Medellín", "Bogotá"], answer: "Medellín" },
    { question: "Which of these countries is the leading producer of emeralds?", type: "multiple", options: ["Peru", "Colombia", "Chile"], answer: "Colombia" },
    { question: "Which traditional Andean dish is popular in Peru?", type: "multiple", options: ["Cuy", "Asado", "Ceviche"], answer: "Cuy" },
    { question: "Which city is the capital of Peru?", type: "multiple", options: ["Lima", "Bogotá", "Santiago"], answer: "Lima" },
    { question: "Which country is home to the world's largest flying bird, the Andean Condor?", type: "multiple", options: ["Peru", "Chile", "Colombia"], answer: "Peru" },
    { question: "Which city in Chile is an important mining hub?", type: "multiple", options: ["Antofagasta", "Valparaíso", "Santiago"], answer: "Antofagasta" },
    { question: "Which country is home to the Amazon Rainforest?", type: "multiple", options: ["Peru", "Chile", "Colombia"], answer: "Peru" },

    // Checkbox Questions (30)
    { question: "Which of the following are natural wonders found in Colombia?", type: "checkbox", options: ["Cocora Valley", "Tayrona National Park", "Atacama Desert"], answer: ["Cocora Valley", "Tayrona National Park"] },
    { question: "Which countries have coastlines on both the Pacific Ocean and the Caribbean Sea?", type: "checkbox", options: ["Colombia", "Peru", "Chile"], answer: ["Colombia"] },
    { question: "Which of the following are traditional dishes from Peru?", type: "checkbox", options: ["Ceviche", "Lomo Saltado", "Empanadas"], answer: ["Ceviche", "Lomo Saltado"] },
    { question: "Which of the following are capitals of South American countries?", type: "checkbox", options: ["Lima", "Bogotá", "Santiago"], answer: ["Lima", "Bogotá", "Santiago"] },
    { question: "Which of the following are famous natural attractions in Chile?", type: "checkbox", options: ["Atacama Desert", "Torres del Paine", "Lake Titicaca"], answer: ["Atacama Desert", "Torres del Paine"] },
    { question: "Which of the following languages are spoken in Peru?", type: "checkbox", options: ["Spanish", "Quechua", "Aymara"], answer: ["Spanish", "Quechua", "Aymara"] },
    { question: "Which of the following are famous writers from Colombia?", type: "checkbox", options: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges"], answer: ["Gabriel García Márquez"] },
    { question: "Which of the following countries are in South America?", type: "checkbox", options: ["Peru", "Colombia", "Mexico"], answer: ["Peru", "Colombia"] },
    { question: "Which of the following are famous Chilean poets?", type: "checkbox", options: ["Pablo Neruda", "Gabriela Mistral", "Mario Vargas Llosa"], answer: ["Pablo Neruda", "Gabriela Mistral"] },
    { question: "Which of the following cities are located in Colombia?", type: "checkbox", options: ["Bogotá", "Medellín", "Lima"], answer: ["Bogotá", "Medellín"] },
    { question: "Which of the following countries share the Andes Mountains?", type: "checkbox", options: ["Chile", "Peru", "Colombia"], answer: ["Chile", "Peru", "Colombia"] },
    { question: "Which of the following are official languages in Peru?", type: "checkbox", options: ["Spanish", "Quechua", "Guarani"], answer: ["Spanish", "Quechua"] },
    { question: "Which of the following are UNESCO World Heritage Sites in Peru?", type: "checkbox", options: ["Machu Picchu", "Nazca Lines", "Galápagos Islands"], answer: ["Machu Picchu", "Nazca Lines"] },
    { question: "Which of the following are famous landmarks in Chile?", type: "checkbox", options: ["Easter Island", "Torres del Paine", "Galápagos Islands"], answer: ["Easter Island", "Torres del Paine"] },
    { question: "Which of the following countries are located in the Southern Hemisphere?", type: "checkbox", options: ["Chile", "Colombia", "Peru"], answer: ["Chile", "Peru"] },
    { question: "Which of the following are traditional Colombian foods?", type: "checkbox", options: ["Arepas", "Empanadas", "Ceviche"], answer: ["Arepas", "Empanadas"] },
    { question: "Which of the following countries have territory in the Amazon Rainforest?", type: "checkbox", options: ["Peru", "Colombia", "Chile"], answer: ["Peru", "Colombia"] },
    { question: "Which of the following are natural wonders in Peru?", type: "checkbox", options: ["Nazca Lines", "Amazon Rainforest", "Caño Cristales"], answer: ["Nazca Lines", "Amazon Rainforest"] },
    { question: "Which of the following are Chilean wines?", type: "checkbox", options: ["Carmenere", "Malbec", "Cabernet Sauvignon"], answer: ["Carmenere", "Cabernet Sauvignon"] },
    { question: "Which of the following are UNESCO World Heritage Sites in Chile?", type: "checkbox", options: ["Easter Island", "Valparaíso", "Nazca Lines"], answer: ["Easter Island", "Valparaíso"] },
    { question: "Which of the following are mountain ranges found in South America?", type: "checkbox", options: ["Andes", "Rockies", "Himalayas"], answer: ["Andes"] },
    { question: "Which of the following are famous Colombian authors?", type: "checkbox", options: ["Gabriel García Márquez", "Laura Esquivel", "Isabel Allende"], answer: ["Gabriel García Márquez"] },
    { question: "Which of the following countries are known for coffee production?", type: "checkbox", options: ["Colombia", "Peru", "Chile"], answer: ["Colombia", "Peru"] },
    { question: "Which of the following are Inca archaeological sites in Peru?", type: "checkbox", options: ["Machu Picchu", "Sacsayhuamán", "Chichen Itza"], answer: ["Machu Picchu", "Sacsayhuamán"] },
    { question: "Which of the following cities are major urban centers in Chile?", type: "checkbox", options: ["Santiago", "Valparaíso", "Bogotá"], answer: ["Santiago", "Valparaíso"] },
    { question: "Which of the following are famous festivals in Colombia?", type: "checkbox", options: ["Carnival of Barranquilla", "Inti Raymi", "Día de Muertos"], answer: ["Carnival of Barranquilla"] },
    { question: "Which of the following countries border Colombia?", type: "checkbox", options: ["Venezuela", "Brazil", "Bolivia"], answer: ["Venezuela", "Brazil"] },
    { question: "Which of the following are types of Andean music?", type: "checkbox", options: ["Huayno", "Cumbia", "Tango"], answer: ["Huayno", "Cumbia"] },
    { question: "Which of the following are popular beaches in Colombia?", type: "checkbox", options: ["Playa Blanca", "Tayrona", "Copacabana"], answer: ["Playa Blanca", "Tayrona"] },
    { question: "Which of the following are Peruvian musicians?", type: "checkbox", options: ["Susana Baca", "Eva Ayllón", "Shakira"], answer: ["Susana Baca", "Eva Ayllón"] },

    // Fill-in-the-Blank Questions (30)
    { question: "The capital city of Peru is ____.", type: "fillblank", answer: "Lima" },
    { question: "The famous Inca site located in the Andes Mountains of Peru is ____.", type: "fillblank", answer: "Machu Picchu" },
    { question: "The desert in Chile known as one of the driest places on Earth is called ____.", type: "fillblank", answer: "Atacama Desert" },
    { question: "The capital city of Colombia is ____.", type: "fillblank", answer: "Bogotá" },
    { question: "The Chilean poet who won the Nobel Prize in Literature is ____.", type: "fillblank", answer: "Pablo Neruda" },
    { question: "The national dish of Peru, made with raw fish and citrus juice, is called ____.", type: "fillblank", answer: "Ceviche" },
    { question: "The Amazon River, which is one of the world's longest rivers, flows through the country of ____.", type: "fillblank", answer: "Peru" },
    { question: "The highest navigable lake in the world, shared by Peru and Bolivia, is ____.", type: "fillblank", answer: "Lake Titicaca" },
    { question: "The 'Salsa Capital of the World,' located in Colombia, is the city of ____.", type: "fillblank", answer: "Cali" },
    { question: "The river in Colombia known for its vibrant colors is ____.", type: "fillblank", answer: "Caño Cristales" },
    { question: "The capital city of Chile, which is also the country's largest city, is ____.", type: "fillblank", answer: "Santiago" },
    { question: "The Peruvian city that was the historic capital of the Inca Empire is ____.", type: "fillblank", answer: "Cusco" },
    { question: "The famous Easter Island, known for its Moai statues, belongs to the country of ____.", type: "fillblank", answer: "Chile" },
    { question: "The famous Peruvian writer who won the Nobel Prize in Literature in 2010 is ____.", type: "fillblank", answer: "Mario Vargas Llosa" },
    { question: "The highest peak in the Andes Mountains, located in Argentina but near the Chilean border, is ____.", type: "fillblank", answer: "Aconcagua" },
    { question: "The currency used in Peru is the ____.", type: "fillblank", answer: "Sol" },
    { question: "The ancient civilization that built Machu Picchu is known as the ____.", type: "fillblank", answer: "Inca" },
    { question: "The traditional Colombian dish made with grilled corn cakes is called ____.", type: "fillblank", answer: "Arepas" },
    { question: "The city in Colombia known as the 'City of Eternal Spring' is ____.", type: "fillblank", answer: "Medellín" },
    { question: "The body of water that borders Chile to the west is the ____ Ocean.", type: "fillblank", answer: "Pacific" },
    { question: "The famous Nazca Lines, large geoglyphs in the desert, are located in ____.", type: "fillblank", answer: "Peru" },
    { question: "The Chilean port city known for its colorful houses and steep funiculars is ____.", type: "fillblank", answer: "Valparaíso" },
    { question: "The coffee-producing region in Colombia is known as the Coffee ____.", type: "fillblank", answer: "Triangle" },
    { question: "The traditional music and dance of Chile is called the ____.", type: "fillblank", answer: "Cueca" },
    { question: "The ancient city of Carthage, located in modern-day Tunisia, was once a colony of the ____.", type: "fillblank", answer: "Phoenicians" },
    { question: "The river that forms part of the border between Colombia and Venezuela is the ____.", type: "fillblank", answer: "Orinoco" },
    { question: "The famous Lost City, an ancient archaeological site in Colombia, is also known as ____.", type: "fillblank", answer: "Ciudad Perdida" },
    { question: "The Peruvian city known as the 'White City' because of its volcanic stone buildings is ____.", type: "fillblank", answer: "Arequipa" },
    { question: "The Spanish conquistador who led the conquest of the Inca Empire was ____.", type: "fillblank", answer: "Francisco Pizarro" },
    { question: "The Chilean island located off the coast and famous for its Moai statues is ____.", type: "fillblank", answer: "Easter Island" },

    // Image-Based Questions (30)
    { question: "Which country's flag is shown below? <br><img src='flag-of-chile.jpeg' alt='Flag of Chile'>", type: "multiple", options: ["Chile", "Peru", "Colombia"], answer: "Chile" },
    { question: "Which archaeological site is shown in the image? <br><img src='machu.jpeg' alt='Machu Picchu'>", type: "multiple", options: ["Machu Picchu", "Nazca Lines", "Ciudad Perdida"], answer: "Machu Picchu" },
    { question: "Which famous city is depicted in the image? <br><img src='cusco.jpeg' alt='Cusco'>", type: "multiple", options: ["Cusco", "Lima", "Arequipa"], answer: "Cusco" },
    { question: "Which natural wonder is shown below? <br><img src='cano-cristales.jpeg' alt='Caño Cristales'>", type: "multiple", options: ["Caño Cristales", "Lake Titicaca", "Amazon Rainforest"], answer: "Caño Cristales" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-peru.jpeg' alt='Flag of Peru'>", type: "multiple", options: ["Peru", "Colombia", "Chile"], answer: "Peru" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-colombia.jpeg' alt='Flag of Colombia'>", type: "multiple", options: ["Colombia", "Peru", "Chile"], answer: "Colombia" },
    { question: "Which famous statue is depicted in the image? <br><img src='moai-statue.jpeg' alt='Moai Statue'>", type: "multiple", options: ["Moai Statue", "Statue of Liberty", "Christ the Redeemer"], answer: "Moai Statue" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-brazil.jpeg' alt='Flag of Brazil'>", type: "multiple", options: ["Brazil", "Peru", "Chile"], answer: "Brazil" },
    { question: "Which city is depicted in the image? <br><img src='Lima.jpeg' alt='Lima'>", type: "multiple", options: ["Lima", "Bogotá", "Santiago"], answer: "Lima" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-argentina.jpeg' alt='Flag of Argentina'>", type: "multiple", options: ["Argentina", "Peru", "Chile"], answer: "Argentina" },
    { question: "Which natural wonder is shown in the image? <br><img src='lake-titicaca.jpeg' alt='Lake Titicaca'>", type: "multiple", options: ["Lake Titicaca", "Amazon River", "Caño Cristales"], answer: "Lake Titicaca" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-bolivia.jpeg' alt='Flag of Bolivia'>", type: "multiple", options: ["Bolivia", "Peru", "Chile"], answer: "Bolivia" },
    
    { question: "Which country is represented by this flag? <br><img src='flag-of-ecuador.jpeg' alt='Flag of Ecuador'>", type: "multiple", options: ["Ecuador", "Peru", "Chile"], answer: "Ecuador" },
    { question: "Which mountain range is depicted in the image? <br><img src='andes.jpeg' alt='Andes Mountains'>", type: "multiple", options: ["Andes", "Himalayas", "Rockies"], answer: "Andes" },
 
    { question: "Which ancient civilization is depicted in the image? <br><img src='inca-civilization.jpeg' alt='Inca Civilization'>", type: "multiple", options: ["Inca", "Maya", "Aztec"], answer: "Inca" },
    
    { question: "Which famous author is shown in the image? <br><img src='gabriel-garcia-marquez.jpeg' alt='Gabriel García Márquez'>", type: "multiple", options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa"], answer: "Gabriel García Márquez" },
    { question: "Which city is depicted in the image? <br><img src='santiago.jpeg' alt='Santiago'>", type: "multiple", options: ["Santiago", "Lima", "Bogotá"], answer: "Santiago" },
    
    { question: "Which famous festival is depicted in the image? <br><img src='carnival-of-barranquilla.jpeg' alt='Carnival of Barranquilla'>", type: "multiple", options: ["Carnival of Barranquilla", "Inti Raymi", "Día de Muertos"], answer: "Carnival of Barranquilla" },
    { question: "Which Colombian musician is shown in the image? <br><img src='Shakira.jpeg' alt='Shakira'>", type: "multiple", options: ["Shakira", "Susana Baca", "Eva Ayllón"], answer: "Shakira" },
    
    { question: "Which famous Chilean author is depicted in the image? <br><img src='isabel-allende.jpeg' alt='Isabel Allende'>", type: "multiple", options: ["Isabel Allende", "Gabriel García Márquez", "Mario Vargas Llosa"], answer: "Isabel Allende" },
    
    { question: "Caracas is the capital city of Venezuela.", type: "truefalse", answer: true },
    { question: "Lake Maracaibo is known for its frequent lightning storms.", type: "truefalse", answer: true },
    { question: "Angel Falls is the tallest waterfall in the world.", type: "truefalse", answer: true },
    { question: "The official language of Venezuela is Portuguese.", type: "truefalse", answer: false },
    { question: "Maracaibo is located near the western coast of Venezuela.", type: "truefalse", answer: true },
    { question: "Valencia is a key economic hub in Venezuela.", type: "truefalse", answer: true },
    { question: "The Orinoco River is one of the longest rivers in South America.", type: "truefalse", answer: true },
    { question: "Roraima Mountain is a flat-topped mountain in Venezuela.", type: "truefalse", answer: true },
    { question: "Venezuelans speak Spanish as their official language.", type: "truefalse", answer: true },
    { question: "Simón Bolívar was known as 'El Libertador'.", type: "truefalse", answer: true },
    { question: "Gustavo Dudamel is a famous Venezuelan football player.", type: "truefalse", answer: false },
    { question: "Venezuela is known for having one of the largest oil reserves in the world.", type: "truefalse", answer: true },
    { question: "Margarita Island is known as the 'Pearl of the Caribbean'.", type: "truefalse", answer: true },
    { question: "Angel Falls is located in the Andes Mountains.", type: "truefalse", answer: false },
    { question: "Lake Titicaca is located in Venezuela.", type: "truefalse", answer: false },
    { question: "The Witches' Market in La Paz is a popular tourist destination in Bolivia.", type: "truefalse", answer: true },
    { question: "Bolivia has two capital cities: Sucre and La Paz.", type: "truefalse", answer: true },
    { question: "The Uyuni Salt Flats are the smallest salt flats in the world.", type: "truefalse", answer: false },
    { question: "Lake Titicaca is the highest navigable lake in the world.", type: "truefalse", answer: true },
    { question: "Bolivia is home to 36 official languages.", type: "truefalse", answer: true },
    { question: "The Amazon Rainforest is located in Argentina.", type: "truefalse", answer: false },
    { question: "The Galápagos Islands are famous for their unique wildlife.", type: "truefalse", answer: true },
    { question: "The Andes Mountains are the shortest mountain range in the world.", type: "truefalse", answer: false },
    { question: "Christ the Redeemer is a famous statue in Rio de Janeiro, Brazil.", type: "truefalse", answer: true },
    { question: "Machu Picchu was built by the Inca civilization.", type: "truefalse", answer: true },
    { question: "Buenos Aires is the capital of Peru.", type: "truefalse", answer: false },
    { question: "The Uyuni Salt Flats in Bolivia are known for their mirror-like reflection.", type: "truefalse", answer: true },
    { question: "Evo Morales was a former president of Bolivia.", type: "truefalse", answer: true },
    { question: "The Orinoco River flows through Venezuela.", type: "truefalse", answer: true },
    { question: "Simón Bolívar is a famous Venezuelan musician.", type: "truefalse", answer: false },
    
        
        { question: "Which cities are located in Venezuela?", type: "checkbox", options: ["Caracas", "Valencia", "Lima"], answer: ["Caracas", "Valencia"] },
        { question: "What are some famous natural landmarks in Venezuela?", type: "checkbox", options: ["Angel Falls", "Uyuni Salt Flats", "Roraima Mountain"], answer: ["Angel Falls", "Roraima Mountain"] },
        { question: "Which of these are capital cities in Venezuela?", type: "checkbox", options: ["Maracaibo", "Caracas", "Valencia"], answer: ["Caracas"] },
        { question: "Which Venezuelan cities are known for their cultural heritage?", type: "checkbox", options: ["Maracaibo", "Santa Cruz", "Valencia"], answer: ["Maracaibo", "Valencia"] },
        { question: "Which Venezuelan landscapes are famous worldwide?", type: "checkbox", options: ["Orinoco River", "Lake Titicaca", "Angel Falls"], answer: ["Orinoco River", "Angel Falls"] },
        { question: "Which mountains are located in Venezuela?", type: "checkbox", options: ["Andes Mountains", "Roraima Mountain", "Himalayas"], answer: ["Andes Mountains", "Roraima Mountain"] },
        { question: "What are traditional music genres in Venezuela?", type: "checkbox", options: ["Joropo", "Tango", "Salsa"], answer: ["Joropo", "Salsa"] },
        { question: "Which natural sites are located in Bolivia?", type: "checkbox", options: ["Uyuni Salt Flats", "Angel Falls", "Lake Titicaca"], answer: ["Uyuni Salt Flats", "Lake Titicaca"] },
        { question: "What are famous cities in Bolivia?", type: "checkbox", options: ["Santa Cruz", "Maracaibo", "La Paz"], answer: ["Santa Cruz", "La Paz"] },
        { question: "Which languages are spoken in Bolivia?", type: "checkbox", options: ["Spanish", "Quechua", "Aymara"], answer: ["Spanish", "Quechua", "Aymara"] },
        { question: "Which famous Bolivians have impacted the world?", type: "checkbox", options: ["Evo Morales", "Gustavo Dudamel", "Jaime Escalante"], answer: ["Evo Morales", "Jaime Escalante"] },
        { question: "Which Venezuelan cities are economic hubs?", type: "checkbox", options: ["Caracas", "Valencia", "La Paz"], answer: ["Caracas", "Valencia"] },
        { question: "Which landmarks are found in Venezuela?", type: "checkbox", options: ["Angel Falls", "Christ the Redeemer", "Roraima Mountain"], answer: ["Angel Falls", "Roraima Mountain"] },
        { question: "Which cities are major cultural centers in Bolivia?", type: "checkbox", options: ["Santa Cruz", "La Paz", "Valencia"], answer: ["Santa Cruz", "La Paz"] },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-venezuela.jpeg' alt='Flag of Venezuela'>",
            type: "multiple",
            options: ["Venezuela", "Colombia", "Brazil"],
            answer: "Venezuela"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-bolivia.jpeg' alt='Flag of Bolivia'>",
            type: "multiple",
            options: ["Bolivia", "Peru", "Chile"],
            answer: "Bolivia"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-brazil.jpeg' alt='Flag of Brazil'>",
            type: "multiple",
            options: ["Argentina", "Brazil", "Uruguay"],
            answer: "Brazil"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-chile.jpeg' alt='Flag of Chile'>",
            type: "multiple",
            options: ["Chile", "Argentina", "Peru"],
            answer: "Chile"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-peru.jpeg' alt='Flag of Peru'>",
            type: "multiple",
            options: ["Peru", "Ecuador", "Colombia"],
            answer: "Peru"
        },
        {
            question: "Which country is known for the Andes mountain range? <br><img src='andes.jpeg' alt='Andes Mountains'>",
            type: "multiple",
            options: ["Bolivia", "Brazil", "Venezuela"],
            answer: "Bolivia"
        },
        {
            question: "Which country is famous for the Galápagos Islands? <br><img src='galapagos-islands.jpeg' alt='Galápagos Islands'>",
            type: "multiple",
            options: ["Ecuador", "Venezuela", "Chile"],
            answer: "Ecuador"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-argentina.jpeg' alt='Flag of Argentina'>",
            type: "multiple",
            options: ["Argentina", "Uruguay", "Paraguay"],
            answer: "Argentina"
        },
        {
            question: "Which country is home to the Atacama Desert? <br><img src='atacama.jpeg' alt='Atacama Desert'>",
            type: "multiple",
            options: ["Chile", "Bolivia", "Peru"],
            answer: "Chile"
        },
        {
            question: "Which country is known for the city of La Paz? <br><img src='la-paz.jpeg' alt='La Paz'>",
            type: "multiple",
            options: ["Bolivia", "Peru", "Colombia"],
            answer: "Bolivia"
        },
        {
            question: "Which country is known for the Amazon Rainforest? <br><img src='amazon.jpeg' alt='Amazon Rainforest'>",
            type: "multiple",
            options: ["Brazil", "Argentina", "Venezuela"],
            answer: "Brazil"
        },
        
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-paraguay.jpeg' alt='Flag of Paraguay'>",
            type: "multiple",
            options: ["Paraguay", "Bolivia", "Uruguay"],
            answer: "Paraguay"
        },
        {
            question: "Which country has the highest waterfall, the Salto Ángel? <br><img src='salto-angel.jpeg' alt='Salto Ángel'>",
            type: "multiple",
            options: ["Venezuela", "Brazil", "Colombia"],
            answer: "Venezuela"
        },
        {
            question: "Which country is known for the Uyuni Salt Flats? <br><img src='uyuni-salt-flats.jpeg' alt='Uyuni Salt Flats'>",
            type: "multiple",
            options: ["Bolivia", "Chile", "Argentina"],
            answer: "Bolivia"
        },
        {
            question: "Which country is known for the city of Buenos Aires? ",
            type: "multiple",
            options: ["Argentina", "Chile", "Uruguay"],
            answer: "Argentina"
        },
        {
            question: "Which country is famous for Machu Picchu? <br><img src='machu.jpeg' alt='Machu Picchu'>",
            type: "multiple",
            options: ["Peru", "Bolivia", "Ecuador"],
            answer: "Peru"
        },
        
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-uruguay.jpeg' alt='Flag of Uruguay'>",
            type: "multiple",
            options: ["Uruguay", "Paraguay", "Argentina"],
            answer: "Uruguay"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-colombia.jpeg' alt='Flag of Colombia'>",
            type: "multiple",
            options: ["Colombia", "Venezuela", "Ecuador"],
            answer: "Colombia"
        },
        {
            question: "Which country is known for the city of Santiago? <br><img src='santiago.jpeg' alt='Santiago'>",
            type: "multiple",
            options: ["Chile", "Argentina", "Peru"],
            answer: "Chile"
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
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
