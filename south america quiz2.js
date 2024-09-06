const questions =[
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
    { question: "Which Colombian dish is shown below? <br><img src='arepas.jpeg' alt='Arepas'>", type: "multiple", options: ["Arepas", "Empanadas", "Ceviche"], answer: "Arepas" },
    { question: "Which archaeological site is shown in the image? <br><img src='sacsayhuaman.jpeg' alt='Sacsayhuamán'>", type: "multiple", options: ["Sacsayhuamán", "Machu Picchu", "Nazca Lines"], answer: "Sacsayhuamán" },
    { question: "Which Chilean poet is depicted in the image? <br><img src='pablo-Neruda.jpeg' alt='Pablo Neruda'>", type: "multiple", options: ["Pablo Neruda", "Gabriel García Márquez", "Mario Vargas Llosa"], answer: "Pablo Neruda" },
    { question: "Which city is shown in the image? <br><img src='bogota.jpeg' alt='Bogotá'>", type: "multiple", options: ["Bogotá", "Lima", "Santiago"], answer: "Bogotá" },
    { question: "Which ancient civilization is depicted in the image? <br><img src='inca-civilization.jpeg' alt='Inca Civilization'>", type: "multiple", options: ["Inca", "Maya", "Aztec"], answer: "Inca" },
    { question: "Which natural wonder is shown in the image? <br><img src='torres-del-paine.jpeg' alt='Torres del Paine'>", type: "multiple", options: ["Torres del Paine", "Lake Titicaca", "Nazca Lines"], answer: "Torres del Paine" },
    { question: "Which famous author is shown in the image? <br><img src='gabriel-garcia-marquez.jpeg' alt='Gabriel García Márquez'>", type: "multiple", options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa"], answer: "Gabriel García Márquez" },
    { question: "Which city is depicted in the image? <br><img src='santiago.jpeg' alt='Santiago'>", type: "multiple", options: ["Santiago", "Lima", "Bogotá"], answer: "Santiago" },
    { question: "Which Peruvian festival is shown in the image? <br><img src='inti-raymi.jpeg' alt='Inti Raymi'>", type: "multiple", options: ["Inti Raymi", "Carnival of Barranquilla", "Día de Muertos"], answer: "Inti Raymi" },
    { question: "Which famous festival is depicted in the image? <br><img src='carnival-of-barranquilla.jpeg' alt='Carnival of Barranquilla'>", type: "multiple", options: ["Carnival of Barranquilla", "Inti Raymi", "Día de Muertos"], answer: "Carnival of Barranquilla" },
    { question: "Which Colombian musician is shown in the image? <br><img src='Shakira.jpeg' alt='Shakira'>", type: "multiple", options: ["Shakira", "Susana Baca", "Eva Ayllón"], answer: "Shakira" },
    { question: "Which famous Colombian river is shown in the image? <br><img src='orinoco-river.jpeg' alt='Orinoco River'>", type: "multiple", options: ["Orinoco River", "Amazon River", "Caño Cristales"], answer: "Orinoco River" },
    { question: "Which famous Chilean author is depicted in the image? <br><img src='isabel-allende.jpeg' alt='Isabel Allende'>", type: "multiple", options: ["Isabel Allende", "Gabriel García Márquez", "Mario Vargas Llosa"], answer: "Isabel Allende" },
    { question: "Which natural wonder is depicted in the image? <br><img src='amazon-rainforest.jpeg' alt='Amazon Rainforest'>", type: "multiple", options: ["Amazon Rainforest", "Lake Titicaca", "Torres del Paine"], answer: "Amazon Rainforest" }
]
let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 200000);
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
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 20 correct!`;
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
