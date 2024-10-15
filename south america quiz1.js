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
        question: "Identify this natural wonder located on the border of Brazil and Argentina. <br><img src='iguazuu_falls.jpeg' alt='Iguazu Falls'>",
        type: "multiple",
        options: ["Iguazu Falls", "Niagara Falls", "Victoria Falls"],
        answer: "Iguazu Falls"
    },
    {
        question: "Which mountain range is depicted in this image? <br><img src='andes mts.jpeg' alt='Andes Mountains'>",
        type: "multiple",
        options: ["Andes", "Himalayas", "Rockies"],
        answer: "Andes"
    },
    {
        question: "Identify this Brazilian city known for its Carnival festival. <br><img src='rio_carnival.jpeg' alt='Rio Carnival'>",
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
        question: "Identify this famous Argentine dance. <br><img src='tangoo-dance.jpeg' alt='Tango Dance'>",
        type: "multiple",
        options: ["Tango", "Samba", "Flamenco"],
        answer: "Tango"
    },
  
    {
        question: "Identify this famous soccer player from Argentina. <br><img src='lionel_messi.jpeg' alt='Lionel Messi'>",
        type: "multiple",
        options: ["Lionel Messi", "Pelé", "Cristiano Ronaldo"],
        answer: "Lionel Messi"
    },
    {
        question: "Which South American desert is shown in this image? <br><img src='atacama desert.jpeg' alt='Atacama Desert'>",
        type: "multiple",
        options: ["Atacama", "Sahara", "Gobi"],
        answer: "Atacama"
    },
    {
        question: "which famous ancient city located in Peru. ",
        type: "multiple",
        options: ["Machu Picchu", "Petra", "Angkor Wat"],
        answer: "Machu Picchu"
    },
    {
        question: "Which famous waterfall is shown in this image? <br><img src='iguazu_falls.jpeg' alt='Iguazu Falls'>",
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
        question: "Which mountain is depicted in this image? <br><img src='aconcagua-mountain.jpeg' alt='Aconcagua Mountain'>",
        type: "multiple",
        options: ["Aconcagua", "Mount Everest", "Kilimanjaro"],
        answer: "Aconcagua"
    },
    {
        question: "Identify this South American city known for its European-style architecture. <br><img src='buenoss_aires.jpeg' alt='Buenos Aires'>",
        type: "multiple",
        options: ["Buenos Aires", "Lima", "Brasília"],
        answer: "Buenos Aires"
    },
    {
        question: "Which country is represented by this flag? <br><img src='flag-of-argentinaa.jpeg' alt='Flag of Argentina'>",
        type: "multiple",
        options: ["Argentina", "Brazil", "Uruguay"],
        answer: "Argentina"
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
        question: "Which famous South American waterfall is depicted in this image? <br><img src='angel_falls.jpeg' alt='Angel Falls'>",
        type: "multiple",
        options: ["Angel Falls", "Iguazu Falls", "Victoria Falls"],
        answer: "Angel Falls"
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
        question: "Identify this famous waterfall located in Venezuela. <br><img src='angel_falls.jpeg' alt='Angel Falls'>",
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
        question: "Identify this famous South American natural wonder. <br><img src='iguazuu_falls.jpeg' alt='Iguazu Falls'>",
        type: "multiple",
        options: ["Iguazu Falls", "Angel Falls", "Victoria Falls"],
        answer: "Iguazu Falls"
    },
    {
        question: "Which South American city is shown in this image? <br><img src='sao_pauloo.jpeg' alt='São Paulo'>",
        type: "multiple",
        options: ["São Paulo", "Rio de Janeiro", "Brasília"],
        answer: "São Paulo"
    },
    {
        question: "Identify this famous South American festival. <br><img src='rio_carnival.jpeg' alt='Rio Carnival'>",
        type: "multiple",
        options: ["Carnival", "Oktoberfest", "Mardi Gras"],
        answer: "Carnival"
    }
]




let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20);
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
  // Scroll to the top of the page after displaying the results
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
