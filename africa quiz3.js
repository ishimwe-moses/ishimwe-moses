const questions = [
    // True or False Questions
    { question: "Southern Africa is known for its deserts, grasslands, and breathtaking landscapes.", type: "truefalse", answer: true },
    { question: "There are 15 countries in Southern Africa.", type: "truefalse", answer: true },
    { question: "South Africa is the smallest country in Southern Africa.", type: "truefalse", answer: false },
    { question: "Kruger National Park is located in Botswana.", type: "truefalse", answer: false },
    { question: "Victoria Falls is located on the border of Zambia and Zimbabwe.", type: "truefalse", answer: true },
    { question: "The Namib Desert is one of the oldest deserts in the world.", type: "truefalse", answer: true },
    { question: "Madagascar is the largest island in Africa.", type: "truefalse", answer: true },
    { question: "Mauritius is known for its rich marine life and luxury resorts.", type: "truefalse", answer: true },
    { question: "Seychelles is located in the Atlantic Ocean.", type: "truefalse", answer: false },
    { question: "Zanzibar is part of Tanzania.", type: "truefalse", answer: true },

    // Fill in the Blank Questions
    { question: "South Africa's capital cities are Pretoria, Cape Town, and ____.", type: "fillblank", answer: "Bloemfontein" },
    { question: "The capital city of Botswana is ____.", type: "fillblank", answer: "Gaborone" },
    { question: "The capital city of Zimbabwe is ____.", type: "fillblank", answer: "Harare" },
    { question: "The capital city of Zambia is ____.", type: "fillblank", answer: "Lusaka" },
    { question: "The capital city of Namibia is ____.", type: "fillblank", answer: "Windhoek" },
    { question: "The capital city of Lesotho is ____.", type: "fillblank", answer: "Maseru" },
    { question: "The capital city of Swaziland (Eswatini) is ____.", type: "fillblank", answer: "Mbabane" },
    { question: "The capital city of Angola is ____.", type: "fillblank", answer: "Luanda" },
    { question: "The capital city of Mozambique is ____.", type: "fillblank", answer: "Maputo" },
    { question: "The capital city of Malawi is ____.", type: "fillblank", answer: "Lilongwe" },
    { question: "The capital city of Madagascar is ____.", type: "fillblank", answer: "Antananarivo" },
    { question: "The capital city of Mauritius is ____.", type: "fillblank", answer: "Port Louis" },
    { question: "The capital city of Seychelles is ____.", type: "fillblank", answer: "Victoria" },
    { question: "The capital city of Cape Verde is ____.", type: "fillblank", answer: "Praia" },
    { question: "The Okavango Delta is located in ____.", type: "fillblank", answer: "Botswana" },

    // Multiple Choice Questions
    { question: "What is the largest country in Southern Africa by area?", type: "multiple", options: ["South Africa", "Namibia", "Botswana"], answer: "South Africa" },
    { question: "Which country is home to the Namib Desert?", type: "multiple", options: ["South Africa", "Namibia", "Botswana"], answer: "Namibia" },
    { question: "Victoria Falls is located on the border of which two countries?", type: "multiple", options: ["Zambia and Zimbabwe", "Botswana and Namibia", "South Africa and Mozambique"], answer: "Zambia and Zimbabwe" },
    { question: "The Okavango Delta is a unique inland delta located in which country?", type: "multiple", options: ["South Africa", "Namibia", "Botswana"], answer: "Botswana" },
    { question: "The Kruger National Park is famous for its:", type: "multiple", options: ["Mountains", "Deserts", "Wildlife Safaris"], answer: "Wildlife Safaris" },
    { question: "Which country is not part of Southern Africa?", type: "multiple", options: ["South Africa", "Botswana", "Kenya"], answer: "Kenya" },
    { question: "What is the capital city of Madagascar?", type: "multiple", options: ["Port Louis", "Victoria", "Antananarivo"], answer: "Antananarivo" },
    { question: "Which island is known for its biodiversity and unique wildlife?", type: "multiple", options: ["Mauritius", "Madagascar", "Seychelles"], answer: "Madagascar" },
    { question: "Which country is known for its spice tours and cultural experiences?", type: "multiple", options: ["Zanzibar", "Mauritius", "Seychelles"], answer: "Zanzibar" },
    { question: "Which island is a paradise for beach lovers and nature enthusiasts?", type: "multiple", options: ["Seychelles", "Cape Verde", "Madagascar"], answer: "Seychelles" },

    // Checkbox Questions
    { question: "Which countries are in Southern Africa?", type: "checkbox", options: ["South Africa", "Botswana", "Zimbabwe", "Kenya"], answer: ["South Africa", "Botswana", "Zimbabwe"] },
    { question: "Which are main touristic areas in Southern Africa?", type: "checkbox", options: ["Kruger National Park", "Victoria Falls", "Serengeti National Park", "Okavango Delta"], answer: ["Kruger National Park", "Victoria Falls", "Okavango Delta"] },
    { question: "Which countries share Lake Victoria?", type: "checkbox", options: ["Kenya", "Uganda", "Tanzania", "Rwanda"], answer: ["Kenya", "Uganda", "Tanzania"] },
    { question: "Which natural resources are found in Southern Africa?", type: "checkbox", options: ["Gold", "Oil", "Diamond", "Coal"], answer: ["Gold", "Diamond", "Coal"] },
    { question: "Which languages are widely spoken in Southern Africa?", type: "checkbox", options: ["English", "Afrikaans", "Zulu", "Swahili"], answer: ["English", "Afrikaans", "Zulu"] },
    { question: "Which countries are known for their deserts in Southern Africa?", type: "checkbox", options: ["South Africa", "Botswana", "Namibia", "Angola"], answer: ["South Africa", "Botswana", "Namibia"] },
    { question: "Which countries have capital cities named in the format 'Windhoek'?", type: "checkbox", options: ["Namibia", "Angola", "Lesotho", "Swaziland"], answer: ["Namibia"] },
    { question: "Which islands belong to Africa?", type: "checkbox", options: ["Madagascar", "Mauritius", "Seychelles", "Iceland"], answer: ["Madagascar", "Mauritius", "Seychelles"] },
    { question: "Which countries are known for their wildlife safaris?", type: "checkbox", options: ["South Africa", "Botswana", "Zimbabwe", "Namibia"], answer: ["South Africa", "Botswana", "Zimbabwe", "Namibia"] },
    { question: "Which countries are part of the Southern African Development Community (SADC)?", type: "checkbox", options: ["South Africa", "Botswana", "Zimbabwe", "Kenya"], answer: ["South Africa", "Botswana", "Zimbabwe"] },

    // Image-Based Questions
    { question: "Which country's flag is shown below? <br><img src='flag-of-south-africa.jpeg' alt='Flag of South Africa'>", type: "multiple", options: ["Botswana", "South Africa", "Namibia"], answer: "South Africa" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-botswana.jpeg' alt='Flag of Botswana'>", type: "multiple", options: ["Botswana", "Zimbabwe", "South Africa"], answer: "Botswana" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-zimbabwe.jpeg' alt='Flag of Zimbabwe'>", type: "multiple", options: ["Botswana", "Zimbabwe", "Zambia"], answer: "Zimbabwe" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-zambia.jpeg' alt='Flag of Zambia'>", type: "multiple", options: ["Zambia", "Zimbabwe", "Angola"], answer: "Zambia" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-namibia.jpeg' alt='Flag of Namibia'>", type: "multiple", options: ["Namibia", "Botswana", "South Africa"], answer: "Namibia" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-lesotho.jpeg' alt='Flag of Lesotho'>", type: "multiple", options: ["Lesotho", "Swaziland", "South Africa"], answer: "Lesotho" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-swaziland.jpeg' alt='Flag of Swaziland'>", type: "multiple", options: ["Swaziland", "Botswana", "Lesotho"], answer: "Swaziland" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-angola.jpeg' alt='Flag of Angola'>", type: "multiple", options: ["Angola", "Botswana", "Namibia"], answer: "Angola" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-mozambique.jpeg' alt='Flag of Mozambique'>", type: "multiple", options: ["Mozambique", "Malawi", "Madagascar"], answer: "Mozambique" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-malawi.jpeg' alt='Flag of Malawi'>", type: "multiple", options: ["Malawi", "Zambia", "Zimbabwe"], answer: "Malawi" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-madagascar.jpeg' alt='Flag of Madagascar'>", type: "multiple", options: ["Madagascar", "Mauritius", "Seychelles"], answer: "Madagascar" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-mauritius.jpeg' alt='Flag of Mauritius'>", type: "multiple", options: ["Mauritius", "Madagascar", "Cape Verde"], answer: "Mauritius" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-seychelles.jpeg' alt='Flag of Seychelles'>", type: "multiple", options: ["Seychelles", "Mauritius", "Cape Verde"], answer: "Seychelles" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-cape-verde.jpeg' alt='Flag of Cape Verde'>", type: "multiple", options: ["Cape Verde", "Seychelles", "Mauritius"], answer: "Cape Verde" },
// True or False Questions
{ question: "South Africa is the largest country in Southern Africa.", type: "truefalse", answer: true },
{ question: "Kruger National Park is located in South Africa.", type: "truefalse", answer: true },
{ question: "Victoria Falls is shared between Zambia and Zimbabwe.", type: "truefalse", answer: true },
{ question: "The Okavango Delta is located in Botswana.", type: "truefalse", answer: true },
{ question: "Namib Desert is the oldest desert in the world.", type: "truefalse", answer: true },

// Fill in the Blank Questions
{ question: "The largest country in Southern Africa is ____.", type: "fillblank", answer: "South Africa" },
{ question: "Kruger National Park is famous for its ____ safaris.", type: "fillblank", answer: "wildlife" },
{ question: "Victoria Falls is shared between Zambia and ____.", type: "fillblank", answer: "Zimbabwe" },
{ question: "The Okavango Delta is a unique inland delta located in ____.", type: "fillblank", answer: "Botswana" },
{ question: "Namib Desert is located in ____.", type: "fillblank", answer: "Namibia" },

// Multiple Choice Questions
{ question: "What is the capital city of South Africa?", type: "multiple", options: ["Pretoria", "Cape Town", "Bloemfontein", "All of the above"], answer: "All of the above" },
{ question: "Which country is home to the Okavango Delta?", type: "multiple", options: ["Botswana", "Zimbabwe", "Namibia"], answer: "Botswana" },
{ question: "Victoria Falls is located on which river?", type: "multiple", options: ["Zambezi River", "Nile River", "Limpopo River"], answer: "Zambezi River" },
{ question: "The Namib Desert is found in which country?", type: "multiple", options: ["South Africa", "Namibia", "Botswana"], answer: "Namibia" },
{ question: "Which country is known for its diamonds?", type: "multiple", options: ["Botswana", "South Africa", "Zimbabwe"], answer: "Botswana" },

// Checkbox Questions
{ question: "Which countries are in Southern Africa?", type: "checkbox", options: ["South Africa", "Botswana", "Zimbabwe", "Zambia"], answer: ["South Africa", "Botswana", "Zimbabwe", "Zambia"] },
{ question: "Select the major tourist attractions in Southern Africa:", type: "checkbox", options: ["Kruger National Park", "Victoria Falls", "Okavango Delta"], answer: ["Kruger National Park", "Victoria Falls", "Okavango Delta"] },
{ question: "Which deserts are found in Southern Africa?", type: "checkbox", options: ["Namib Desert", "Kalahari Desert"], answer: ["Namib Desert", "Kalahari Desert"] },
{ question: "Which countries share Victoria Falls?", type: "checkbox", options: ["Zambia", "Zimbabwe"], answer: ["Zambia", "Zimbabwe"] },
{ question: "Which countries are known for their wildlife safaris?", type: "checkbox", options: ["South Africa", "Botswana", "Namibia"], answer: ["South Africa", "Botswana", "Namibia"] },

// Image-Based Questions

{ question: "Which country's flag is shown below? <br><img src='flag-of-namibia.jpeg' alt='Flag of Namibia'>", type: "multiple", options: ["Namibia", "Botswana", "South Africa"], answer: "Namibia" },
{ question: "Which country's flag is shown below? <br><img src='flag-of-zambia.jpeg' alt='Flag of Zambia'>", type: "multiple", options: ["Zambia", "Zimbabwe", "Botswana"], answer: "Zambia" },

// True or False Questions
{ question: "Madagascar is the fourth largest island in the world.", type: "truefalse", answer: true },
{ question: "Seychelles is known for its coral atolls and beaches.", type: "truefalse", answer: true },
{ question: "Mauritius is located in the Indian Ocean.", type: "truefalse", answer: true },
{ question: "Cape Verde is an island country in the Atlantic Ocean.", type: "truefalse", answer: true },
{ question: "Zanzibar is a part of Tanzania.", type: "truefalse", answer: true },

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

];

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
