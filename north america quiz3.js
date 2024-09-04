const questions = [
   
   
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-bermuda.jpeg' alt='Flag of Bermuda'>",
            type: "multiple",
            options: ["Bermuda", "Bahamas", "Barbados"],
            answer: "Bermuda"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-greenland.jpeg' alt='Flag of Greenland'>",
            type: "multiple",
            options: ["Greenland", "Iceland", "Norway"],
            answer: "Greenland"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-bahamas.jpeg' alt='Flag of Bahamas'>",
            type: "multiple",
            options: ["Bahamas", "Bermuda", "Barbados"],
            answer: "Bahamas"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-iceland.jpeg' alt='Flag of Iceland'>",
            type: "multiple",
            options: ["Iceland", "Greenland", "Norway"],
            answer: "Iceland"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>",
            type: "multiple",
            options: ["Denmark", "Greenland", "Sweden"],
            answer: "Denmark"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-finland.jpeg' alt='Flag of Finland'>",
            type: "multiple",
            options: ["Finland", "Norway", "Sweden"],
            answer: "Finland"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-norway.jpeg' alt='Flag of Norway'>",
            type: "multiple",
            options: ["Norway", "Iceland", "Greenland"],
            answer: "Norway"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-canada.jpeg' alt='Flag of Canada'>",
            type: "multiple",
            options: ["Canada", "Greenland", "Norway"],
            answer: "Canada"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-united-states.jpeg' alt='Flag of the United States'>",
            type: "multiple",
            options: ["United States", "Canada", "Greenland"],
            answer: "United States"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-mexico.jpeg' alt='Flag of Mexico'>",
            type: "multiple",
            options: ["Mexico", "United States", "Canada"],
            answer: "Mexico"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>",
            type: "multiple",
            options: ["Sweden", "Finland", "Norway"],
            answer: "Sweden"
        },
        {
            question: "Which country's flag is shown below? <br><img src='flag-of-germany.jpeg' alt='Flag of Germany'>",
            type: "multiple",
            options: ["Germany", "Denmark", "Norway"],
            answer: "Germany"
        },
    
    
        {
            question: "Which countries are in East Africa?",
            type: "checkbox",
            options: ["Kenya", "Nigeria", "Uganda", "Tanzania"],
            answer: ["Kenya", "Uganda", "Tanzania"]
        },
        {
            question: "Which cities are capitals?",
            type: "checkbox",
            options: ["Hamilton", "Nuuk", "Oslo", "Reykjavik"],
            answer: ["Hamilton", "Nuuk", "Oslo", "Reykjavik"]
        },
        {
            question: "Which are physical features of Bermuda?",
            type: "checkbox",
            options: ["Pink sand beaches", "Crystal caves", "Coral reefs", "Mountains"],
            answer: ["Pink sand beaches", "Crystal caves", "Coral reefs"]
        },
        {
            question: "Which languages are spoken in Greenland?",
            type: "checkbox",
            options: ["Greenlandic", "Danish", "Norwegian", "English"],
            answer: ["Greenlandic", "Danish"]
        },
        {
            question: "Which of the following are known for their beaches?",
            type: "checkbox",
            options: ["Bermuda", "Greenland", "Bahamas", "Iceland"],
            answer: ["Bermuda", "Bahamas"]
        },
        {
            question: "Which of these are British Overseas Territories?",
            type: "checkbox",
            options: ["Bermuda", "Greenland", "Falkland Islands", "Gibraltar"],
            answer: ["Bermuda", "Falkland Islands", "Gibraltar"]
        },
        {
            question: "Which countries have coral reefs?",
            type: "checkbox",
            options: ["Bermuda", "Greenland", "Australia", "Egypt"],
            answer: ["Bermuda", "Australia", "Egypt"]
        },
        {
            question: "Which countries are in North America?",
            type: "checkbox",
            options: ["United States", "Canada", "Mexico", "Bermuda"],
            answer: ["United States", "Canada", "Mexico", "Bermuda"]
        },
        {
            question: "Which of the following countries are islands?",
            type: "checkbox",
            options: ["Greenland", "Bermuda", "Iceland", "Bahamas"],
            answer: ["Greenland", "Bermuda", "Iceland", "Bahamas"]
        },
        {
            question: "Which are major cities in Greenland?",
            type: "checkbox",
            options: ["Nuuk", "Hamilton", "Ilulissat", "Reykjavik"],
            answer: ["Nuuk", "Ilulissat"]
        },
        {
            question: "Which of the following countries have icebergs?",
            type: "checkbox",
            options: ["Greenland", "Iceland", "Canada", "Norway"],
            answer: ["Greenland", "Iceland", "Canada", "Norway"]
        },
        {
            question: "Which countries have pink sand beaches?",
            type: "checkbox",
            options: ["Bermuda", "Bahamas", "Greece", "Thailand"],
            answer: ["Bermuda", "Bahamas"]
        },
        {
            question: "The capital city of Bermuda is ____.",
            type: "fillblank",
            answer: "Hamilton"
        },
        {
            question: "The capital city of Greenland is ____.",
            type: "fillblank",
            answer: "Nuuk"
        },
        {
            question: "The official language of Bermuda is ____.",
            type: "fillblank",
            answer: "English"
        },
        {
            question: "The main language spoken in Greenland is ____.",
            type: "fillblank",
            answer: "Greenlandic"
        },
        {
            question: "Bermuda is known for its ____ sand beaches.",
            type: "fillblank",
            answer: "pink"
        },
        {
            question: "Greenland is famous for its ____ ice sheets.",
            type: "fillblank",
            answer: "vast"
        },
        {
            question: "Nuuk is the ____ city of Greenland.",
            type: "fillblank",
            answer: "largest"
        },
        {
            question: "Bermuda is a British ____ Territory.",
            type: "fillblank",
            answer: "Overseas"
        },
        {
            question: "Greenland is the world's ____ island.",
            type: "fillblank",
            answer: "largest"
        },
        {
            question: "More than ____% of Greenland is covered in ice.",
            type: "fillblank",
            answer: "80"
        },
        {
            question: "Bermuda's pink beaches get their color from crushed ____ and shells.",
            type: "fillblank",
            answer: "coral"
        },
        {
            question: "Bermuda's economy is largely based on finance and ____.",
            type: "fillblank",
            answer: "tourism"
        }
    

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