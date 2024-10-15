const questions = [

    // Checkbox Questions
    { question: "Which countries are in East Africa?", type: "checkbox", options: ["Kenya", "Nigeria", "Uganda", "Tanzania"], answer: ["Kenya", "Uganda", "Tanzania"] },
    { question: "Select the major rivers in Africa:", type: "checkbox", options: ["Nile", "Amazon", "Congo", "Mississippi"], answer: ["Nile", "Congo"] },
    { question: "Which are the major mountain ranges in Africa?", type: "checkbox", options: ["Atlas Mountains", "Rocky Mountains", "Drakensberg Mountains"], answer: ["Atlas Mountains", "Drakensberg Mountains"] },
    { question: "Which countries share Lake Victoria?", type: "checkbox", options: ["Kenya", "Uganda", "Tanzania", "Rwanda"], answer: ["Kenya", "Uganda", "Tanzania"] },
    { question: "Which natural resources are found in Africa?", type: "checkbox", options: ["Gold", "Oil", "Diamond", "Coal"], answer: ["Gold", "Oil", "Diamond"] },
    { question: "Select the famous parks in East Africa:", type: "checkbox", options: ["Serengeti", "Yellowstone", "Maasai Mara", "Kruger"], answer: ["Serengeti", "Maasai Mara"] },
    { question: "Which bodies of water surround Africa?", type: "checkbox", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Mediterranean Sea"], answer: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea"] },
    { question: "Which languages are widely spoken in East Africa?", type: "checkbox", options: ["Swahili", "Arabic", "Zulu", "Amharic"], answer: ["Swahili", "Amharic"] },
    { question: "Select the countries in East Africa:", type: "checkbox", options: ["Ethiopia", "South Africa", "Burundi", "Djibouti"], answer: ["Ethiopia", "Burundi", "Djibouti"] },
    { question: "Which of these animals are native to Africa?", type: "checkbox", options: ["Elephant", "Lion", "Kangaroo", "Giraffe"], answer: ["Elephant", "Lion", "Giraffe"] },

    // Image-Based Questions
    { question: "Which country's flag is shown below? <br><img src='flag-of-kenya.jpeg' alt='Flag of Kenya'>", type: "multiple", options: ["Kenya", "Uganda", "Tanzania"], answer: "Kenya" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-uganda.jpeg' alt='Flag of Uganda'>", type: "multiple", options: ["Uganda", "Kenya", "Rwanda"], answer: "Uganda" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-tanzania.jpeg' alt='Flag of Tanzania'>", type: "multiple", options: ["Kenya", "Tanzania", "Uganda"], answer: "Tanzania" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-rwanda.jpeg' alt='Flag of Rwanda'>", type: "multiple", options: ["Burundi", "Rwanda", "Uganda"], answer: "Rwanda" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-burundi.jpeg' alt='Flag of Burundi'>", type: "multiple", options: ["Rwanda", "Burundi", "Tanzania"], answer: "Burundi" },
// True or False Questions
{ question: "The Congo Rainforest is the second largest tropical rainforest in the world.", type: "truefalse", answer: true },
{ question: "Kinshasa is the capital of the Republic of the Congo.", type: "truefalse", answer: false },
{ question: "The Democratic Republic of the Congo was formerly known as Zaire.", type: "truefalse", answer: true },
{ question: "Gabon is known for its national parks and wildlife.", type: "truefalse", answer: true },
{ question: "Lake Tanganyika is located in Central Africa.", type: "truefalse", answer: true },

// Fill in the Blank Questions
{ question: "The capital city of the Democratic Republic of the Congo is ____.", type: "fillblank", answer: "Kinshasa" },
{ question: "The Congo River flows into the ____ Ocean.", type: "fillblank", answer: "Atlantic" },
{ question: "The second largest rainforest in the world is the ____ Rainforest.", type: "fillblank", answer: "Congo" },
{ question: "The Central African country known for its oil production is ____.", type: "fillblank", answer: "Gabon" },
{ question: "The capital of Cameroon is ____.", type: "fillblank", answer: "Yaoundé" },

// Multiple Choice Questions
{ question: "What is the capital city of the Republic of the Congo?", type: "multiple", options: ["Kinshasa", "Brazzaville", "Libreville"], answer: "Brazzaville" },
{ question: "Which country is known for the Virunga National Park?", type: "multiple", options: ["Democratic Republic of the Congo", "Gabon", "Central African Republic"], answer: "Democratic Republic of the Congo" },
{ question: "Lake Tanganyika is shared by which countries?", type: "multiple", options: ["Democratic Republic of the Congo, Burundi, Tanzania, and Zambia", "Uganda, Kenya, and Tanzania", "Gabon, Cameroon, and Equatorial Guinea"], answer: "Democratic Republic of the Congo, Burundi, Tanzania, and Zambia" },
{ question: "Which country is known for its lowland gorillas?", type: "multiple", options: ["Gabon", "Central African Republic", "Angola"], answer: "Gabon" },
{ question: "The capital city of Gabon is:", type: "multiple", options: ["Libreville", "Yaoundé", "Brazzaville"], answer: "Libreville" },

// Checkbox Questions
{ question: "Which countries are in Central Africa?", type: "checkbox", options: ["Democratic Republic of the Congo", "Gabon", "Central African Republic", "Mali"], answer: ["Democratic Republic of the Congo", "Gabon", "Central African Republic"] },
{ question: "Select the major rivers in Central Africa:", type: "checkbox", options: ["Congo River", "Nile River", "Zambezi River"], answer: ["Congo River"] },
{ question: "Which countries share Lake Tanganyika?", type: "checkbox", options: ["Democratic Republic of the Congo", "Burundi", "Tanzania", "Zambia"], answer: ["Democratic Republic of the Congo", "Burundi", "Tanzania", "Zambia"] },
{ question: "Which countries are known for their rainforests?", type: "checkbox", options: ["Gabon", "Democratic Republic of the Congo", "Central African Republic"], answer: ["Gabon", "Democratic Republic of the Congo", "Central African Republic"] },
{ question: "Select the capital cities in Central Africa:", type: "checkbox", options: ["Kinshasa", "Brazzaville", "Libreville", "Yaoundé"], answer: ["Kinshasa", "Brazzaville", "Libreville", "Yaoundé"] },

// Image-Based Questions
{ question: "Which country's flag is shown below? <br><img src='flag-of-drc.jpeg' alt='Flag of Democratic Republic of the Congo'>", type: "multiple", options: ["Democratic Republic of the Congo", "Gabon", "Cameroon"], answer: "Democratic Republic of the Congo" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-congo.jpeg' alt='Flag of Republic of the Congo'>", type: "multiple", options: ["Republic of the Congo", "Gabon", "Angola"], answer: "Republic of the Congo" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-gabon.jpeg' alt='Flag of Gabon'>", type: "multiple", options: ["Gabon", "Democratic Republic of the Congo", "Cameroon"], answer: "Gabon" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-cameroon.jpeg' alt='Flag of Cameroon'>", type: "multiple", options: ["Gabon", "Central African Republic", "Cameroon"], answer: "Cameroon" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-car.jpeg' alt='Flag of Central African Republic'>", type: "multiple", options: ["Democratic Republic of the Congo", "Gabon", "Central African Republic"], answer: "Central African Republic" },

// True or False Questions
{ question: "Nigeria is the most populous country in Africa.", type: "truefalse", answer: true },
{ question: "Accra is the capital of Ghana.", type: "truefalse", answer: true },
{ question: "The Niger River flows through Nigeria.", type: "truefalse", answer: true },
{ question: "The capital city of Senegal is Dakar.", type: "truefalse", answer: true },
{ question: "Ivory Coast is known for its cocoa production.", type: "truefalse", answer: true },

// Fill in the Blank Questions
{ question: "The most populous country in Africa is ____.", type: "fillblank", answer: "Nigeria" },
{ question: "The capital city of Ghana is ____.", type: "fillblank", answer: "Accra" },
{ question: "The ____ River is a major river in West Africa.", type: "fillblank", answer: "Niger" },
{ question: "The capital city of Senegal is ____.", type: "fillblank", answer: "Dakar" },
{ question: "Ivory Coast is a leading producer of ____.", type: "fillblank", answer: "cocoa" },

// Multiple Choice Questions
{ question: "What is the capital city of Nigeria?", type: "multiple", options: ["Lagos", "Abuja", "Accra"], answer: "Abuja" },
{ question: "Which country is known for its historical city of Timbuktu?", type: "multiple", options: ["Mali", "Nigeria", "Ghana"], answer: "Mali" },
{ question: "The Niger River flows into which body of water?", type: "multiple", options: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea"], answer: "Atlantic Ocean" },
{ question: "Which country is the leading producer of cocoa in Africa?", type: "multiple", options: ["Ghana", "Nigeria", "Ivory Coast"], answer: "Ivory Coast" },
{ question: "The capital city of Ivory Coast is:", type: "multiple", options: ["Abidjan", "Yamoussoukro", "Accra"], answer: "Yamoussoukro" },

// Checkbox Questions
{ question: "Which countries are in West Africa?", type: "checkbox", options: ["Nigeria", "Ghana", "Senegal", "Kenya"], answer: ["Nigeria", "Ghana", "Senegal"] },
{ question: "Select the major rivers in West Africa:", type: "checkbox", options: ["Niger River", "Nile River", "Congo River"], answer: ["Niger River"] },
{ question: "Which countries are known for their cocoa production?", type: "checkbox", options: ["Ivory Coast", "Ghana", "Nigeria"], answer: ["Ivory Coast", "Ghana"] },
{ question: "Which countries have capitals named Abuja, Accra, and Dakar?", type: "checkbox", options: ["Nigeria", "Ghana", "Senegal"], answer: ["Nigeria", "Ghana", "Senegal"] },
{ question: "Select the capital cities in West Africa:", type: "checkbox", options: ["Abuja", "Accra", "Dakar", "Nairobi"], answer: ["Abuja", "Accra", "Dakar"] },

// Image-Based Questions
{ question: "Which country's flag is shown below? <br><img src='flag-of-nigeria.jpeg' alt='Flag of Nigeria'>", type: "multiple", options: ["Nigeria", "Ghana", "Senegal"], answer: "Nigeria" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-ghana.jpeg' alt='Flag of Ghana'>", type: "multiple", options: ["Nigeria", "Ghana", "Senegal"], answer: "Ghana" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-senegal.jpeg' alt='Flag of Senegal'>", type: "multiple", options: ["Nigeria", "Ghana", "Senegal"], answer: "Senegal" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-ivory-coast.jpeg' alt='Flag of Ivory Coast'>", type: "multiple", options: ["Ivory Coast", "Ghana", "Nigeria"], answer: "Ivory Coast" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-mali.jpeg' alt='Flag of Mali'>", type: "multiple", options: ["Mali", "Ghana", "Senegal"], answer: "Mali" },

// True or False Questions
{ question: "Madagascar is the fourth largest island in the world.", type: "truefalse", answer: true },
{ question: "Seychelles is known for its coral atolls and beaches.", type: "truefalse", answer: true },
{ question: "Mauritius is located in the Indian Ocean.", type: "truefalse", answer: true },
{ question: "Cape Verde is an island country in the Atlantic Ocean.", type: "truefalse", answer: true },
{ question: "Zanzibar is a part of Mauritius.", type: "truefalse", answer: false },

// Fill in the Blank Questions
{ question: "The capital city of Madagascar is ____.", type: "fillblank", answer: "Antananarivo" },
{ question: "The ____ Islands are known for their beaches and coral reefs.", type: "fillblank", answer: "Seychelles" },
{ question: "The island country located in the Indian Ocean is ____.", type: "fillblank", answer: "Mauritius" },
{ question: "The capital of Cape Verde is ____.", type: "fillblank", answer: "Praia" },
{ question: "Zanzibar is an island that is part of ____.", type: "fillblank", answer: "Tanzania" },

// Multiple Choice Questions
{ question: "What is the capital city of Seychelles?", type: "multiple", options: ["Victoria", "Port Louis", "Antananarivo"], answer: "Victoria" },
{ question: "Which island is known for its unique wildlife, including lemurs?", type: "multiple", options: ["Mauritius", "Madagascar", "Cape Verde"], answer: "Madagascar" },
{ question: "The capital city of Mauritius is:", type: "multiple", options: ["Port Louis", "Victoria", "Antananarivo"], answer: "Port Louis" },
{ question: "Which island country is located in the Atlantic Ocean?", type: "multiple", options: ["Seychelles", "Mauritius", "Cape Verde"], answer: "Cape Verde" },
{ question: "Zanzibar is known for its:", type: "multiple", options: ["Beaches", "Mountains", "Deserts"], answer: "Beaches" },

// Checkbox Questions
{ question: "Which islands are part of Africa?", type: "checkbox", options: ["Madagascar", "Mauritius", "Cape Verde", "Sri Lanka"], answer: ["Madagascar", "Mauritius", "Cape Verde"] },
{ question: "Select the major islands in the Indian Ocean:", type: "checkbox", options: ["Mauritius", "Seychelles", "Madagascar"], answer: ["Mauritius", "Seychelles", "Madagascar"] },
{ question: "Which islands are known for their beaches and coral reefs?", type: "checkbox", options: ["Seychelles", "Mauritius", "Madagascar"], answer: ["Seychelles", "Mauritius", "Madagascar"] },
{ question: "Which countries are island nations?", type: "checkbox", options: ["Cape Verde", "Madagascar", "Mauritius"], answer: ["Cape Verde", "Madagascar", "Mauritius"] },
{ question: "Select the capital cities of island nations:", type: "checkbox", options: ["Victoria", "Port Louis", "Antananarivo"], answer: ["Victoria", "Port Louis", "Antananarivo"] },

// Image-Based Questions
{ question: "Which country's flag is shown below? <br><img src='flag-of-madagascar.jpeg' alt='Flag of Madagascar'>", type: "multiple", options: ["Madagascar", "Mauritius", "Cape Verde"], answer: "Madagascar" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-seychelles.jpeg' alt='Flag of Seychelles'>", type: "multiple", options: ["Seychelles", "Mauritius", "Cape Verde"], answer: "Seychelles" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-mauritius.jpeg' alt='Flag of Mauritius'>", type: "multiple", options: ["Mauritius", "Seychelles", "Cape Verde"], answer: "Mauritius" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-cape-verde.jpeg' alt='Flag of Cape Verde'>", type: "multiple", options: ["Mauritius", "Cape Verde", "Seychelles"], answer: "Cape Verde" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-comoros.jpeg' alt='Flag of Comoros'>", type: "multiple", options: ["Comoros", "Mauritius", "Seychelles"], answer: "Comoros" },

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
    // Hide the quiz and show the results
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Display the score
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 20 correct!`;

    // Populate corrections
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
