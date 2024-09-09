const questions = [
   
                    { question: "Select the countries that are part of Northern Europe.", type: "checkbox", options: ["Norway", "Iceland", "Poland", "Estonia"], answer: ["Norway", "Iceland", "Estonia"] },
                    { question: "Which of the following are Scandinavian countries?", type: "checkbox", options: ["Sweden", "Denmark", "Finland", "Latvia"], answer: ["Sweden", "Denmark", "Finland"] },
                    { question: "Identify the countries known for their fjords.", type: "checkbox", options: ["Norway", "Sweden", "Iceland", "Denmark"], answer: ["Norway", "Iceland"] },
                    { question: "Which of these countries border the Baltic Sea?", type: "checkbox", options: ["Estonia", "Latvia", "Lithuania", "Norway"], answer: ["Estonia", "Latvia", "Lithuania"] },
                    { question: "Select the capital cities of Northern European countries.", type: "checkbox", options: ["Copenhagen", "Reykjavik", "Oslo", "Riga"], answer: ["Copenhagen", "Reykjavik", "Oslo", "Riga"] },
                    { question: "Which countries are known for Viking history?", type: "checkbox", options: ["Norway", "Denmark", "Sweden", "Iceland"], answer: ["Norway", "Denmark", "Sweden", "Iceland"] },
                    { question: "Select the countries with coastlines on the North Sea.", type: "checkbox", options: ["Norway", "Denmark", "Ireland", "Sweden"], answer: ["Norway", "Denmark"] },
                    { question: "Which of the following countries have capital cities starting with the letter 'H'?", type: "checkbox", options: ["Iceland", "Finland", "Denmark", "Estonia"], answer: ["Finland"] },
                    { question: "Identify the countries with significant geothermal activity.", type: "checkbox", options: ["Iceland", "Norway", "Sweden", "Finland"], answer: ["Iceland"] },
                    { question: "Which countries are part of the Nordic Council?", type: "checkbox", options: ["Denmark", "Iceland", "Norway", "Estonia"], answer: ["Denmark", "Iceland", "Norway"] },
                    { question: "Select the countries known for aurora borealis (Northern Lights).", type: "checkbox", options: ["Iceland", "Norway", "Sweden", "Latvia"], answer: ["Iceland", "Norway", "Sweden"] },
                    { question: "Which of the following countries are part of the European Union?", type: "checkbox", options: ["Estonia", "Finland", "Denmark", "Iceland"], answer: ["Estonia", "Finland", "Denmark"] },
                    { question: "Identify the countries with a monarchy.", type: "checkbox", options: ["Sweden", "Denmark", "Norway", "Finland"], answer: ["Sweden", "Denmark", "Norway"] },
                    { question: "Which countries are known for their lakes and forests?", type: "checkbox", options: ["Finland", "Sweden", "Norway", "Iceland"], answer: ["Finland", "Sweden"] },
                    { question: "Select the countries that have participated in Eurovision.", type: "checkbox", options: ["Denmark", "Norway", "Iceland", "Estonia"], answer: ["Denmark", "Norway", "Iceland", "Estonia"] },
                    { question: "Which countries have a population under 10 million?", type: "checkbox", options: ["Iceland", "Norway", "Denmark", "Estonia"], answer: ["Iceland", "Norway", "Denmark", "Estonia"] },
                    { question: "Identify the countries with a maritime climate.", type: "checkbox", options: ["Ireland", "Iceland", "Norway", "Estonia"], answer: ["Ireland", "Iceland", "Norway"] },
                    { question: "Select the countries that are not members of NATO.", type: "checkbox", options: ["Finland", "Ireland", "Sweden", "Iceland"], answer: ["Ireland"] },
                    { question: "Which of these countries have historic trade routes?", type: "checkbox", options: ["Denmark", "Norway", "Sweden", "Iceland"], answer: ["Denmark", "Norway", "Sweden"] },
                    { question: "Select the countries with significant influence from the Vikings.", type: "checkbox", options: ["Norway", "Sweden", "Denmark", "Finland"], answer: ["Norway", "Sweden", "Denmark"] },
                                                              
                   
                    { question: "Which countries are considered part of Southern Europe?", type: "checkbox", options: ["Italy", "Spain", "Greece", "Norway"], answer: ["Italy", "Spain", "Greece"] },
                    { question: "Select the major rivers in Southern Europe:", type: "checkbox", options: ["Tiber", "Tagus", "Rhine", "Danube"], answer: ["Tiber", "Tagus"] },
                    { question: "Which cities are major cultural centers in Southern Europe?", type: "checkbox", options: ["Rome", "Madrid", "Athens", "Vienna"], answer: ["Rome", "Madrid", "Athens"] },
                    { question: "Which countries are known for their Mediterranean coastline in Southern Europe?", type: "checkbox", options: ["Spain", "Italy", "Turkey", "France"], answer: ["Spain", "Italy", "France"] },
                
                    
                   
                    { question: "Which country's flag is shown below? <br><img src='flag-of-italy.jpeg' alt='Flag of Italy'>", type: "multiple", options: ["Italy", "Greece", "Spain"], answer: "Italy" },
                    { question: "Which country's flag is shown below? <br><img src='flag-of-spain.jpeg' alt='Flag of Spain'>", type: "multiple", options: ["Spain", "Portugal", "Italy"], answer: "Spain" },
                    { question: "Which country's flag is shown below? <br><img src='flag-of-greece.jpeg' alt='Flag of Greece'>", type: "multiple", options: ["Greece", "Cyprus", "Malta"], answer: "Greece" },
                    { question: "Which country's flag is shown below? <br><img src='flag-of-portugal.jpeg' alt='Flag of Portugal'>", type: "multiple", options: ["Portugal", "Spain", "Italy"], answer: "Portugal" },
                    
                    // Northern Europe
                    { question: "Which countries are considered part of Northern Europe?", type: "checkbox", options: ["Sweden", "Denmark", "Finland", "Italy"], answer: ["Sweden", "Denmark", "Finland"] },
                    { question: "Select the major rivers in Northern Europe:", type: "checkbox", options: ["Volga", "Dnieper", "Murray", "Elbe"], answer: ["Volga", "Elbe"] },
                    { question: "Which cities are major cultural centers in Northern Europe?", type: "checkbox", options: ["Stockholm", "Copenhagen", "Helsinki", "Oslo"], answer: ["Stockholm", "Copenhagen", "Helsinki"] },
                    { question: "Which countries are known for their Viking history in Northern Europe?", type: "checkbox", options: ["Denmark", "Sweden", "Norway", "Germany"], answer: ["Denmark", "Sweden", "Norway"] },
                    
                    
                   
                    { question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>", type: "multiple", options: ["Sweden", "Norway", "Finland"], answer: "Sweden" },
                    { question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>", type: "multiple", options: ["Denmark", "Iceland", "Norway"], answer: "Denmark" },
                    { question: "Which country's flag is shown below? <br><img src='flag-of-finland.jpeg' alt='Flag of Finland'>", type: "multiple", options: ["Finland", "Estonia", "Latvia"], answer: "Finland" },
    
];



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
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
}
