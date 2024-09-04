
const questions=[
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
        question: "Which country is known for the Amazon Rainforest? <br><img src='amazon-rainforest.jpeg' alt='Amazon Rainforest'>",
        type: "multiple",
        options: ["Brazil", "Argentina", "Venezuela"],
        answer: "Brazil"
    },
    {
        question: "Which country is famous for the Angel Falls? <br><img src='angel-falls.jpeg' alt='Angel Falls'>",
        type: "multiple",
        options: ["Venezuela", "Colombia", "Peru"],
        answer: "Venezuela"
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
        question: "Which country is known for the city of Buenos Aires? <br><img src='buenos-aires.jpeg' alt='Buenos Aires'>",
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
        question: "Which country is known for the Pampas region? <br><img src='pampas-region.jpeg' alt='Pampas Region'>",
        type: "multiple",
        options: ["Argentina", "Brazil", "Paraguay"],
        answer: "Argentina"
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
]    
let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20000);
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
