const questions=[
    // True or False Questions
{ question: "Asia is the largest continent on Earth.", type: "truefalse", answer: true },
{ question: "The Himalayas are the tallest mountain range in the world.", type: "truefalse", answer: true },
{ question: "China is the most populous country in the world.", type: "truefalse", answer: true },
{ question: "India has the second largest population in the world.", type: "truefalse", answer: true },
{ question: "The Ganges River is considered holy in Hinduism.", type: "truefalse", answer: true },
{ question: "The Great Wall of China can be seen from space with the naked eye.", type: "truefalse", answer: false },
{ question: "Tokyo is the capital city of South Korea.", type: "truefalse", answer: false },
{ question: "Mount Everest is located on the border between Nepal and China.", type: "truefalse", answer: true },
{ question: "The Yangtze River is the longest river in China.", type: "truefalse", answer: true },
{ question: "India's official language is Mandarin.", type: "truefalse", answer: false },

// Fill in the Blank Questions
{ question: "The capital city of China is ____.", type: "fillblank", answer: "Beijing" },
{ question: "The ____ River is the longest in India.", type: "fillblank", answer: "Ganges" },
{ question: "The Taj Mahal is located in the city of ____.", type: "fillblank", answer: "Agra" },
{ question: "The tallest mountain in the world is Mount ____.", type: "fillblank", answer: "Everest" },
{ question: "The ancient trade route known as the Silk Road connected China to ____.", type: "fillblank", answer: "Europe" },

// Multiple Choice Questions
{ question: "What is the capital city of India?", type: "multiple", options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "New Delhi" },
{ question: "Which river is considered the longest in China?", type: "multiple", options: ["Yellow River", "Yangtze River", "Mekong River", "Pearl River"], answer: "Yangtze River" },
{ question: "The Taj Mahal was built by which Mughal emperor?", type: "multiple", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
{ question: "Which country is known as the 'Land of the Rising Sun'?", type: "multiple", options: ["China", "India", "Japan", "South Korea"], answer: "Japan" },
{ question: "Which desert is located in northern China?", type: "multiple", options: ["Gobi", "Sahara", "Karakum", "Thar"], answer: "Gobi" },

// Checkbox Questions
{ question: "Which of the following countries are in Asia?", type: "checkbox", options: ["China", "India", "Brazil", "Russia"], answer: ["China", "India"] },
{ question: "Select the major rivers in Asia:", type: "checkbox", options: ["Yangtze", "Ganges", "Amazon", "Danube"], answer: ["Yangtze", "Ganges"] },
{ question: "Which languages are widely spoken in India?", type: "checkbox", options: ["Hindi", "Bengali", "Tamil", "Mandarin"], answer: ["Hindi", "Bengali", "Tamil"] },
{ question: "Which are the major mountain ranges in Asia?", type: "checkbox", options: ["Himalayas", "Rocky Mountains", "Andes", "Karakoram"], answer: ["Himalayas", "Karakoram"] },
{ question: "Select the countries that share borders with China:", type: "checkbox", options: ["India", "Russia", "Nepal", "Mongolia"], answer: ["India", "Russia", "Nepal", "Mongolia"] },

// Image-Based Questions
{
    question: "Which country's flag is shown below? <br><img src='flag-of-china.jpeg' alt='Flag of China'>", 
    type: "multiple", 
    options: ["China", "Japan", "South Korea", "Vietnam"], 
    answer: "China"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-india.jpeg' alt='Flag of India'>", 
    type: "multiple", 
    options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], 
    answer: "India"
},
{
    question: "Which landmark is shown below? <br><img src='taj-mahal.jpeg' alt='Taj Mahal'>", 
    type: "multiple", 
    options: ["Red Fort", "Taj Mahal", "Qutub Minar", "Lotus Temple"], 
    answer: "Taj Mahal"
},
{
    question: "Which mountain is shown below? <br><img src='mount-everest.jpeg' alt='Mount Everest'>", 
    type: "multiple", 
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"], 
    answer: "Mount Everest"
},
{
    question: "Which river is shown below? <br><img src='yangtze-river.jpeg' alt='Yangtze River'>", 
    type: "multiple", 
    options: ["Ganges River", "Yangtze River", "Yellow River", "Brahmaputra River"], 
    answer: "Yangtze River"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-china.jpeg' alt='Flag of China'>", 
    type: "multiple", 
    options: ["China", "Japan", "South Korea", "Vietnam"], 
    answer: "China"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-japan.jpeg' alt='Flag of Japan'>", 
    type: "multiple", 
    options: ["Japan", "South Korea", "China", "Thailand"], 
    answer: "Japan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-india.jpeg' alt='Flag of India'>", 
    type: "multiple", 
    options: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], 
    answer: "India"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-south-korea.jpeg' alt='Flag of South Korea'>", 
    type: "multiple", 
    options: ["South Korea", "North Korea", "Japan", "China"], 
    answer: "South Korea"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-vietnam.jpeg' alt='Flag of Vietnam'>", 
    type: "multiple", 
    options: ["Vietnam", "Laos", "Cambodia", "Thailand"], 
    answer: "Vietnam"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-thailand.jpeg' alt='Flag of Thailand'>", 
    type: "multiple", 
    options: ["Thailand", "Malaysia", "Singapore", "Indonesia"], 
    answer: "Thailand"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-malaysia.jpeg' alt='Flag of Malaysia'>", 
    type: "multiple", 
    options: ["Malaysia", "Indonesia", "Philippines", "Brunei"], 
    answer: "Malaysia"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-philippines.jpeg' alt='Flag of Philippines'>", 
    type: "multiple", 
    options: ["Philippines", "Thailand", "Malaysia", "Vietnam"], 
    answer: "Philippines"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-indonesia.jpeg' alt='Flag of Indonesia'>", 
    type: "multiple", 
    options: ["Indonesia", "Malaysia", "Singapore", "Brunei"], 
    answer: "Indonesia"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-pakistan.jpeg' alt='Flag of Pakistan'>", 
    type: "multiple", 
    options: ["Pakistan", "India", "Bangladesh", "Afghanistan"], 
    answer: "Pakistan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-bangladesh.jpeg' alt='Flag of Bangladesh'>", 
    type: "multiple", 
    options: ["Bangladesh", "India", "Pakistan", "Sri Lanka"], 
    answer: "Bangladesh"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-sri-lanka.jpeg' alt='Flag of Sri Lanka'>", 
    type: "multiple", 
    options: ["Sri Lanka", "India", "Bangladesh", "Pakistan"], 
    answer: "Sri Lanka"
},

// Additional countries
{
    question: "Which country's flag is shown below? <br><img src='flag-of-nepal.jpeg' alt='Flag of Nepal'>", 
    type: "multiple", 
    options: ["Nepal", "Bhutan", "India", "Bangladesh"], 
    answer: "Nepal"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-bhutan.jpeg' alt='Flag of Bhutan'>", 
    type: "multiple", 
    options: ["Bhutan", "Nepal", "Sri Lanka", "India"], 
    answer: "Bhutan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-afghanistan.jpeg' alt='Flag of Afghanistan'>", 
    type: "multiple", 
    options: ["Afghanistan", "Pakistan", "Iran", "Tajikistan"], 
    answer: "Afghanistan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-mongolia.jpeg' alt='Flag of Mongolia'>", 
    type: "multiple", 
    options: ["Mongolia", "China", "Kazakhstan", "Russia"], 
    answer: "Mongolia"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-north-korea.jpeg' alt='Flag of North Korea'>", 
    type: "multiple", 
    options: ["North Korea", "South Korea", "China", "Japan"], 
    answer: "North Korea"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-myanmar.jpeg' alt='Flag of Myanmar'>", 
    type: "multiple", 
    options: ["Myanmar", "Thailand", "Vietnam", "Cambodia"], 
    answer: "Myanmar"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-laos.jpeg' alt='Flag of Laos'>", 
    type: "multiple", 
    options: ["Laos", "Vietnam", "Thailand", "Cambodia"], 
    answer: "Laos"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-cambodia.jpeg' alt='Flag of Cambodia'>", 
    type: "multiple", 
    options: ["Cambodia", "Laos", "Vietnam", "Thailand"], 
    answer: "Cambodia"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-brunei.jpeg' alt='Flag of Brunei'>", 
    type: "multiple", 
    options: ["Brunei", "Malaysia", "Indonesia", "Singapore"], 
    answer: "Brunei"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-singapore.jpeg' alt='Flag of Singapore'>", 
    type: "multiple", 
    options: ["Singapore", "Malaysia", "Indonesia", "Thailand"], 
    answer: "Singapore"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-kazakhstan.jpeg' alt='Flag of Kazakhstan'>", 
    type: "multiple", 
    options: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan"], 
    answer: "Kazakhstan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-uzbekistan.jpeg' alt='Flag of Uzbekistan'>", 
    type: "multiple", 
    options: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan"], 
    answer: "Uzbekistan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-turkmenistan.jpeg' alt='Flag of Turkmenistan'>", 
    type: "multiple", 
    options: ["Turkmenistan", "Uzbekistan", "Kazakhstan", "Kyrgyzstan"], 
    answer: "Turkmenistan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-kyrgyzstan.jpeg' alt='Flag of Kyrgyzstan'>", 
    type: "multiple", 
    options: ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Tajikistan"], 
    answer: "Kyrgyzstan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-tajikistan.jpeg' alt='Flag of Tajikistan'>", 
    type: "multiple", 
    options: ["Tajikistan", "Uzbekistan", "Kyrgyzstan", "Turkmenistan"], 
    answer: "Tajikistan"
},
{
    question: "Which country's flag is shown below? <br><img src='flag-of-armenia.jpeg' alt='Flag of Armenia'>", 
    type: "multiple", 
    options: ["Armenia", "Azerbaijan", "Georgia", "Turkey"], 
    answer: "Armenia"
},

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


